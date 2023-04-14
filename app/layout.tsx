import Providers from '@/lib/providers'
import '@/styles/globals.css'

export const metadata = {
  title: 'RandalHerndon.com',
  description: 'Randal Herndon | Interdisciplinary, Creative, Developer, Musician.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-100 dark:bg-black'>
        <Providers>
        {children}</Providers></body>
    </html>
  )
}
