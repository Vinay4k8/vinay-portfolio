import {createClient} from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url"
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET 
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'
const token=process.env.NEXT_PUBLIC_SANITY_TOKEN

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
   // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
   useCdn:true,
   token,
})

const builder=imageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source);