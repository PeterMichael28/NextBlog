import imageUrlBuilder from '@sanity/image-url'
import { client } from "./sanity.client";


const builder = imageUrlBuilder( client );

const urlFor = ( src: any ) => builder.image( src );

export default urlFor