import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import ClientSideRouter from './ClientSideRouter';

type Props = {
    posts: Post[]
}

const BlogList = ({posts}: Props) => {
  return (
      <div>
          <hr className='border border-gray-800 mb-10 mt-5' />

          <div className='grid grid-cols-1 md:grid-cols-2 px-5 sm:px-10 gap-x-10 gap-y-10'>
              {/**Posts */ }
              { posts.map( post => {
                  
                  return (
                      <ClientSideRouter key={post._id} route={`/post/${post.slug.current}`}>
                        <div  className='flex flex-col group cursor-pointer bg-[#e3e6f3]'>
                            <div className='relative w-full h-[16rem] sm:h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-300 ease-out'>
                                <Image
                                className='object-cover object-left lg:object-center'
                                src={urlFor(post.mainImage).url()}
                                alt={post.author.name}
                                fill
                                />

                                <div className='absolute bottom-0 w-full bg-opacity-30 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                                    <div>
                                        <p className='font-bold'>{ post.title}</p>
                                        <p className='font-light text-sm'>
                                            {
                                                new Date( post._createdAt ).toLocaleDateString( "en-US", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric"
                                            })
                                            }
                                        </p>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
                                        { post.categories.map( (category, i) => {
                                            return (
                                                <div key={i} className='bg-gray-800 text-center text-[#e3e6f3] px-3 py-1 rounded-full text-sm font-semibold'>
                                                    <p>{ category.title}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div> 
                            
                            <div className='mt-5 flex-1 px-4'>
                                <p className='underline text-lg font-bold'>{post.title}</p>
                                <p className='text-black line-clamp-2 '>{post.description}</p>
                            </div>
                            
                            
                            <p className='mt-5 font-bold flex items-center group-hover:underline px-4 pb-3'>
                                Read more
                                <FiArrowUpRight className='ml-2 h-4 w-4'/>
                            </p>
                        </div>
                            
                      </ClientSideRouter>
                  )
              })}
          </div>
    </div>
  )
}

export default BlogList