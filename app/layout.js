import './globals.css'
import Cursor from '@/components/Cursor'

export const metadata = {
  title: 'Dev Patel — Full Stack Developer',
  description: 'Full Stack Developer specializing in MERN stack, Cloud Computing, and modern web technologies. Based in Toronto.',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg' }],
    shortcut: [{ url: '/icon.svg' }],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  )
}