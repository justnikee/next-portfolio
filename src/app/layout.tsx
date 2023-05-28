import Header from './components/header'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const inter = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: '-Nikhil-',
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
