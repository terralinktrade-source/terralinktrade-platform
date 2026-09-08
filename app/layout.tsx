import './globals.css'
import { PropsWithChildren } from 'react'

export const metadata = {
  title: 'Terra Link Trade',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
