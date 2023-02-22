import Banner from '@/components/Banner';
import Header from '@/components/Header';
import '../globals.css'

export default function RootLayout( {
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />

      <body className='max-w-7xl mx-auto pb-5'>
      <Header />
        <Banner />
        <hr className='border border-[#e3e6f3] mb-10 mt-5' />
        { children }</body>
    </html>
  )
}
