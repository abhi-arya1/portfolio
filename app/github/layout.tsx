import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Abhi\'s GitHub',
  description: 'abhi-arya1 on GitHub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (redirect('https://github.com/abhi-arya1'))
}
