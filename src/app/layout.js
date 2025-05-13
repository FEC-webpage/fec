import { Inter } from 'next/font/google'
import './styles/globals.css'
import './styles/Animatedlatter.css'
import ThemeProvider from './theme/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Website',
  description: 'Created with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
} 