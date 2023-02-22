import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const RichTextComponent: any = {
    types: {
        image: ( { value }: any ) => {
            return (
                <div className='relative w-full h-48 m-10 mx-auto'>
                    <Image
                        className='w-full object-contain h-ful'
                        src={ urlFor( value ).url() }
                        alt='Blog Post Image'
                       fill
                    />
                </div>
            );
        }
        },
        list: {
            bullet: ( { children }: any ) => {
                <ul className="ml-10 py-5 list-disc space-y-5">{ children}</ul>
            },
            number: ( { children }: any ) => {
                <ol className="mt-lg list-decimal">{ children}</ol>
            },
        },
        block: {
            h1: ( { children }: any ) => (
                <h1 className='text-5xl py-7 font-bold'> {children}</h1>
            ),
            h2: ( { children }: any ) => (
                <h1 className='text-4xl py-7 font-bold'>{ children}</h1>
            ),
            h3: ( { children }: any ) => (
                <h1 className='text-3xl py-7 font-bold'>{ children}</h1>
            ),
            h4: ( { children }: any ) => (
                <h1 className='text-2xl py-7 font-bold'>{ children}</h1>
            ),
            normal: ( { children }: any ) => (
                <p className='py-1 text-sm'>{children }</p>
            ),
            
            blockquote: ( { children }: any ) => {
                <blockquote className='border-l-[#e3e6f3] border-l-2 pl-5 py-3 my-5'>{ children}</blockquote>
            }
            
            
        },
    marks: {
        link: ( { children, value }: any ) => {
            const rel = !value.href.startsWith( "/" ) ? "noreferrer noopener" : undefined;
    
            return (
                <Link href={value.href}
                    rel={ rel }
                    className='underline decoration-[#f7ab0a] hover:decoration-black'>{ children}</Link>
            )
        },
    },
}