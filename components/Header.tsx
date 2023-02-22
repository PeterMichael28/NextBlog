import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-5 md:px-10 py-5'>
        <div className='flex items-center space-x-2'>
           <Link href='/'>
            <Image
                className='w-[40px] h-[40px]'
                src='/logo.png'
                width={100}
                height={100}
                alt='logo'
             />
           </Link>
           <h1 className='text-sm'>My Blog</h1>
        </div>
          <div>
              <Link href='/' className='px-5 py-2 text-sm md:text-base bg-gray-900 text-[#e3e6f3] flex items-center rounded-full text-center '>
                  Sign up 
              </Link>
        </div>
    </header>
  )
}

export default Header