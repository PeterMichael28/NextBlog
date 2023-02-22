
import { RichTextComponent } from '@/components/RichTextComponent';
import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import React, { Key } from 'react'


type Props = {
    params: {
        slug: string
    }
}

export const revalidate = 60 //revalidate pages after 60secs


//generating a static page while building
export async function generateStaticParams() {
    const query = groq`
    *[_type == 'post']
    {
       slug
    }
`
//  
    const slugs: Post[] = await client.fetch(query)
  
    const slugRoutes = slugs.map( ( slug ) => slug.slug.current );
    
    return slugRoutes.map( slug => ( { 
        slug: slug
    }))
}

 const Post = async ({params: {slug}}: Props) => {
     const query = groq`
        *[_type == 'post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `
    //  console.log(slug)
    //  console.log('ook')
    const post = await client.fetch(query, {slug})
        // console.log(post)
    // console.log(post.title)

  return (
      <article className='px-5 sm:px-10 pb-28 max-w-6xl mx-auto'>
          <section className='space-y-2 text-white h-auto'>
              <div className='h-auto flex justify-center py-6'>
                  <section className='p-5 bg-gray-800  w-full flex flex-col justify-between'>
                    <div className='flex flex-col md:flex-row justify-between gap-y-4 w-full'>
                        <div>
                            <h1 className='text-2xl font-extrabold '>
                                {post.title}
                              </h1>
                              <p className=''>
                                  {
                                      new Date( post._createdAt ).toLocaleDateString( "en-US", {
                                          day: "numeric",
                                          month: "long",
                                          year: "numeric"
                                      } )
                                  }
                              </p>
                        </div>
                          <div className='flex items-center space-x-2'>
                              {/* <Image
                                  className='rounded-full'
                                  src={urlFor(post.author?.image).url()}
                                  alt={post.author.name}
                                  height= {90}
                                  width={90}
                              /> */}
                            <div className='w-64'>
                                  <h3 className='text-lg font-bold'>Author: {post.author.name}</h3>
                                  <div>{ /* TODO: AUTHOR DESC*/}</div>
                            </div>
                        </div>
                    </div>
                      <div className=''>
                          <h2 className='italic pt-4'>{post.description}</h2>
                          <div className='flex items-center justify-end mt-auto space-x-2'>
                              {
                                  post.categories.map( (category: {
                                      _id: string; title: string ; 
                                  } ) => {
                                    //   console.log(category)
                                  return   ( <p key={category._id} className='bg-[#e3e6f3] text-gray-800 px-3 py-2 rounded-full text-sm font-semibold mt-4'>
                                          {category.title}
                                      </p>)
                                  })
                              }
                          </div>
                      </div>
                  </section>
              </div>
          </section>
          <div className='mt-4 w-full'>
              
          <PortableText value={post.body} components={RichTextComponent} />
        </div>
      </article>
  )
}

export default Post