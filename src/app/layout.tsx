import type { Metadata } from 'next'
import type { Viewport } from 'next';
import './globals.css'

export const metadata: Metadata = {
  title: 'BMW - Luxury. Fast. Forward.',
  description: 'Experience the ultimate driving machine with BMW luxury vehicles.',
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  )
}