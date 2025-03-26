import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import '../styles/globals.css'
 
export const metadata: Metadata = {
  title: 'Customize your E-Mail using AI',
  description: 'Created by Abhinandan Jain.',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}