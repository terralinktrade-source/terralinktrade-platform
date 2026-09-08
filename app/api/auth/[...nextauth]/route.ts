import { authOptions } from '../../../lib/auth'
import NextAuth from 'next-auth'

// Route handler for NextAuth (App Router)
export { default } from 'next-auth/react'

// Note: In Next.js App Router, you can export a handler like this, or use next-auth's recommended
// route handler. The lib/auth.ts exports authOptions; adjust as needed for your Next.js version.
