import 'server-only'
import postgres from 'postgres'

// Vercel's Neon integration sets DATABASE_URL (and POSTGRES_URL on older setups).
function url() {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL || ''
}

export function isDbConfigured() {
  return url() !== ''
}

type Sql = ReturnType<typeof postgres>
const g = globalThis as typeof globalThis & { __leadSql?: Sql; __leadSchema?: Promise<void> }

function client(): Sql {
  if (!g.__leadSql) {
    g.__leadSql = postgres(url(), {
      max: 3,
      idle_timeout: 20,
      connect_timeout: 10,
      // Neon's pooled connection does not keep prepared statements between requests.
      prepare: false,
      onnotice: () => {},
    })
  }
  return g.__leadSql
}

export const HOME_SITE = 'usmankhizar'

// Creating the tables on first use means there is no separate migration step to run.
async function ensureSchema(sql: Sql) {
  // Every website that sends leads here is a site. usmankhizar.com is the first.
  await sql`
    create table if not exists sites (
      id bigserial primary key,
      slug text not null unique,
      name text not null,
      domains text[] not null default '{}',
      key_hash text unique,
      created_at timestamptz not null default now()
    )`
  await sql`
    insert into sites (slug, name, domains)
    values (${HOME_SITE}, 'usmankhizar.com', ${['usmankhizar.com', 'www.usmankhizar.com']})
    on conflict (slug) do nothing`
  await sql`
    create table if not exists leads (
      id bigserial primary key,
      site_id bigint not null references sites (id),
      email text not null,
      name text,
      phone text,
      status text not null default 'new',
      source text,
      interest text,
      budget text,
      tags text[] not null default '{}',
      ghl_contact_id text,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now(),
      last_activity_at timestamptz not null default now(),
      unique (site_id, email)
    )`
  await sql`create index if not exists leads_recent_idx on leads (last_activity_at desc)`
  await sql`
    create table if not exists lead_activity (
      id bigserial primary key,
      lead_id bigint not null references leads (id) on delete cascade,
      kind text not null,
      body text,
      data jsonb,
      created_at timestamptz not null default now()
    )`
  await sql`create index if not exists lead_activity_lead_idx on lead_activity (lead_id, created_at desc)`
  // Short-lived rows for rate limits: failed admin logins and lead submissions per address.
  await sql`create table if not exists rate_hits (bucket text not null, at timestamptz not null default now())`
  await sql`create index if not exists rate_hits_idx on rate_hits (bucket, at)`
}

/** The database client, with the tables created. Throws when DATABASE_URL is not set. */
export async function db(): Promise<Sql> {
  if (!isDbConfigured()) throw new Error('DATABASE_URL is not set')
  const sql = client()
  if (!g.__leadSchema) {
    g.__leadSchema = ensureSchema(sql).catch((err) => {
      g.__leadSchema = undefined
      throw err
    })
  }
  await g.__leadSchema
  return sql
}
