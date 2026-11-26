'use client'

import { useActionState } from 'react'
import { login } from '../actions'

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined)
  return (
    <form action={action} className="crm-form">
      <label htmlFor="pw">Password</label>
      <input id="pw" name="password" type="password" required autoComplete="current-password" autoFocus />
      <button type="submit" className="crm-btn" disabled={pending}>{pending ? 'Checking…' : 'Sign in'}</button>
      {state?.error && <p role="alert" className="crm-error">{state.error}</p>}
    </form>
  )
}
