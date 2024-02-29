import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Abhi\'s LinkedIn',
  description: 'Abhigyan (Abhi) Arya on LinkedIn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (redirect('https://linkedin.com/in/abhiaarya'))
}
