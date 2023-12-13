import Bulb from '@/components/Bulb'
import Circles from '@/components/Circles'
import Contact from '@/components/Contact'
import Transition from '@/components/Transition'
import React from 'react'

export const metadata={
  title:"Vinay | Contact"
}


const page = () => {
  return (
    <div className='min-h-[700px] sm:min-h-screen relative overflow-y-scroll'>
       <Transition/>
       <Circles/>
       <Bulb/>
       <Contact/>
    </div>
  )
}

export default page