import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wazid Web',
  description: 'Personal website of Arhaan Wazid',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
