import './globals.css'
import Cursor from '@/components/Cursor'

export const metadata = {
  title: 'Dev Patel — Full Stack Developer',
  description: 'Full Stack Developer specializing in MERN stack, Cloud Computing, and modern web technologies. Based in Toronto.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  )
}