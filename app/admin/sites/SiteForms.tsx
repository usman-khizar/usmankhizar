'use client'

import { useActionState, useState } from 'react'
import { addSite, newSiteKey, type SiteState } from '../actions'

function KeyBox({ created }: { created: NonNullable<SiteState>['created'] }) {
  const [copied, setCopied] = useState(false)
  if (!created) return null
  return (
    <div className="crm-key" role="status">
      <p><strong>Key for {created.name}.</strong> Copy it now. It won&apos;t be shown again; if you lose it, make a new one.</p>
      <code>{created.key}</code>
      <button
        type="button"
        className="crm-btn crm-btn-ghost"
        onClick={() => navigator.clipboard?.writeText(created.key).then(() => setCopied(true), () => {})}
      >
        {copied ? 'Copied' : 'Copy key'}
      </button>
    </div>
  )
}

export function AddSiteForm({ endpoint }: { endpoint: string }) {
  const [state, action, pending] = useActionState(addSite, undefined)
  return (
    <>
      <form action={action} className="crm-form">
        <label htmlFor="site-name">Name</label>
        <input id="site-name" name="name" required maxLength={80} placeholder="Smith Plumbing" />
        <label htmlFor="site-domains">Domains</label>
        <input id="site-domains" name="domains" required placeholder="smithplumbing.com, www.smithplumbing.com" />
        <button type="submit" className="crm-btn" disabled={pending}>{pending ? 'Adding…' : 'Add site and make key'}</button>
        {state?.error && <p role="alert" className="crm-error">{state.error}</p>}
      </form>
      <KeyBox created={state?.created} />
      {state?.created && <p className="crm-sub">Send leads to {endpoint} with this key.</p>}
    </>
  )
}

export function NewKeyForm({ id, name, hasKey }: { id: string; name: string; hasKey: boolean; endpoint: string }) {
  const [state, action, pending] = useActionState(newSiteKey, undefined)
  const [sure, setSure] = useState(!hasKey)
  if (state?.created) return <KeyBox created={state.created} />
  return (
    <form action={action} className="crm-inline">
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="name" value={name} />
      {sure ? (
        <button type="submit" className="crm-link" disabled={pending}>{hasKey ? 'Confirm: old key stops working' : 'Make key'}</button>
      ) : (
        <button type="button" className="crm-link" onClick={() => setSure(true)}>Replace key</button>
      )}
    </form>
  )
}
