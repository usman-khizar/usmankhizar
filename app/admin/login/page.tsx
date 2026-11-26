import { redirect } from 'next/navigation'
import { isAdminConfigured, isSignedIn } from '@/lib/admin-auth'
import LoginForm from './LoginForm'

export default async function LoginPage() {
  if (await isSignedIn()) redirect('/admin')
  return (
    <main className="crm-login">
      <div className="crm-card">
        <h1>Lead inbox</h1>
        {isAdminConfigured() ? (
          <LoginForm />
        ) : (
          <p>The inbox is not switched on yet. It needs a database and an admin password (12+ characters) set in the site&apos;s hosting settings.</p>
        )}
      </div>
    </main>
  )
}
