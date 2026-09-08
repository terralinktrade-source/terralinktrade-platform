import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'

export const authOptions = {
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT || 587),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    // Add OAuth providers here (Google, GitHub)
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
  },
}

export default function AuthHandler(req: any, res: any) {
  return NextAuth(req, res, authOptions as any)
}
