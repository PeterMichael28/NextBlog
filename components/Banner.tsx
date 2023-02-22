import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <section className='flex flex-col md:flex-row md:items-center justify-center md:justify-between px-5 md:px-10 font-semibold'>
        <div>
            <h1 className='text-4xl'>My Daily Blog</h1>
              <h2 className='mt-2'>
                  Welcome to {" "}
                  <span className='underline decoration-4 decoration-gray-800 text-gray-800'>Every Developers </span>
                  favorite blog in the Devosphere
            </h2>
        </div>
        <p className='mt-5 md:mt-0 text-gray-400 max-w-md text-sm md:text-base'>New Products features | The latest in Technology | Weekly words of encouragement | Coding Nightmares and More!</p>
    </section>
  )
}

export default Banner