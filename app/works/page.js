import Transition from '@/components/Transition'
import Works from '@/components/Works'
import React from 'react'


export const metadata={
  title:"vinay | Works",
  description:"All the project i develope"
}

const page = () => {
  return (
    <div className='min-h-screen'>
       <Transition/>
       <Works/>
    </div>
  )
}

export default page