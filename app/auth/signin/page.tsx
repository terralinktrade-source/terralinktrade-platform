import React from 'react'
import { getServerSession } from 'next-auth'
import authOptions from '../../lib/auth'

export default async function SignInPage() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <h2>Sign In</h2>
      {session ? (
        <p>Signed in as {session.user?.email}</p>
      ) : (
        <p>Please use the sign-in flow.</p>
      )}
    </div>
  )
}
