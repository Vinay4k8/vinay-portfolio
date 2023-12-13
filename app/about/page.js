// "use client"

import About from '@/components/About'
import Circles from '@/components/Circles'
import Transition from '@/components/Transition'
import React from 'react'

export const metadata={
  title:"About"
}

const page = () => {
  return (
    
    <div className='relative h-screen '>
       <Transition />
       <Circles/>
        
          <About/>
        
    </div>
    
  )
}

export default page