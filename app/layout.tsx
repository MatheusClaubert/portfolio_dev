import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Matheus Claubert.Dev',
  description: 'Bora tomar um café ?',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.png', // Certifique-se que esse arquivo existe na pasta /public
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}