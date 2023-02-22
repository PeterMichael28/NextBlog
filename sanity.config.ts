import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { getDefaultDocumentNode } from './structure';


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECTID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'Mike_Blog_Content_Studio',
  title: 'Mike Blog Content Studio',

  projectId,
  dataset,

  plugins: [ deskTool( {
    defaultDocumentNode: getDefaultDocumentNode
  }), visionTool()],

  schema: {
    types: schemaTypes,
  }
 
})
