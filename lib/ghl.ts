// HighLevel (GHL) contact API. Server only: the token must never reach the browser.
// Docs: https://marketplace.gohighlevel.com/docs/ghl/contacts/upsert-contact
const API = 'https://services.leadconnectorhq.com'

function config() {
  const token = process.env.GHL_PRIVATE_TOKEN
  const locationId = process.env.GHL_LOCATION_ID
  return token && locationId ? { token, locationId } : null
}

export function isGhlConfigured() {
  return config() !== null
}

async function post(path: string, token: string, body: unknown) {
  const res = await fetch(`${API}${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Version: 'v3',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    cache: 'no-store',
    signal: AbortSignal.timeout(8000),
  })
  if (!res.ok) throw new Error(`GHL ${path.split('/').pop()} responded ${res.status}`)
  return res.json()
}

/** Saves the contact, then tags it. Throws if the contact was not saved. */
export async function saveSubscriber(email: string, tags: string[]) {
  const cfg = config()
  if (!cfg) throw new Error('GHL is not configured')

  const saved = await post('/contacts/upsert', cfg.token, {
    locationId: cfg.locationId,
    email,
    source: 'usmankhizar.com email signup',
  })
  const contactId = saved?.contact?.id
  if (!contactId) throw new Error('GHL upsert returned no contact id')

  // Tags go through add-tags because upsert overwrites a contact's existing tags.
  try {
    await post(`/contacts/${encodeURIComponent(contactId)}/tags`, cfg.token, { tags })
  } catch (err) {
    // The lead is already saved, so a failed tag should not fail the signup.
    console.error('[subscribe] contact saved but tagging failed:', err instanceof Error ? err.message : err)
  }
}
