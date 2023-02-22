import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../page.module.css'
import { previewData } from 'next/headers'
import {groq} from 'next-sanity'
import { client } from '@/lib/sanity.client';
import { PreviewSuspense } from 'next-sanity/preview';
import BlogList from '@/components/BlogList';

const inter = Inter({ subsets: ['latin'] })
const query = groq`
  *[_type == 'post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`



export default async function Home() {

  {/** If in preview mode, render this */}
  if ( previewData() ) {
    return ( <PreviewSuspense fallback={ ( <div role="status">
      <p className='text-center text-lg animate-pulse text-gray-800'>Loading Preview Data...</p>
    </div>)}>
      {/**
       * Preview BlogList component
       * Make a Preview BlogList component */ }
    </PreviewSuspense>)
  } 


  {/**If its not in preview mode, render this */ }
  
  {/**fetching data from sanity */}
  const post = await client.fetch( query )
    {/**
         * Blog List Component
         * Make a Preview Blog list Component
    */}
    return (
        <BlogList posts={post} />
    )
}


