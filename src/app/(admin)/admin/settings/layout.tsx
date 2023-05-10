"use client"
import { Exo } from 'next/font/google'
import AdminLayout from '@/components/pageLayout/AdminLayout'

const exo = Exo({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${exo.className} bg-light dark:bg-dark`}>
        <AdminLayout title={'Apify-web | Settings'}>
            {children}
        </AdminLayout>
      </body>
    </html>
  )
}
