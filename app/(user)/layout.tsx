import Banner from '@/components/Banner';
import Header from '@/components/Header';
import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='max-w-7xl mx-auto pb-5'>
      <Header />
      <Banner />
        { children }
      </body>
    </html>
  )
}
