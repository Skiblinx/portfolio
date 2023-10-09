
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blinxz | Front-End Developer',
  description: 'Blinxz portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
