import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Abhi\'s Notes',
  description: 'View Abhi\'s Markdown Notes on Quartz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (redirect('https://notespage.pages.dev'))
}
