import type { Metadata } from 'next'
import { Literata, Manrope } from 'next/font/google'
import Header from '../components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { ModalProvider } from '@/context/ModalContext'
import './globals.css'

const display = Literata({
  variable: '--font-display',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

const sans = Manrope({
  variable: '--font-sans',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Кофейня «ЧайКофский» — кофе, чай и еда к ним',
    template: '%s · ЧайКофский',
  },
  description:
    'Учебный проект: сайт вымышленной кофейни. Эспрессо, капучино, флэт уайт, листовой чай и еда к ним — меню с ценами и составом.',
  keywords: ['кофейня', 'кофе', 'чай', 'эспрессо', 'меню'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper">
        <ModalProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  )
}
