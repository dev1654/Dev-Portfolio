import './globals.css'
import Cursor from '@/components/Cursor'

export const metadata = {
  title: 'Dev Patel — Software Developer',
  description: 'Software Developer with 4+ years of experience building scalable web applications and data-driven solutions — MERN stack, SQL, Python, and data & analytics. Based in Toronto.',
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