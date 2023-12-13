"use client"

import Bulb from '@/components/Bulb'
import Circles from '@/components/Circles'
import WorksSlider from '@/components/WorksSlider'
import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import { client } from '@/lib/client'
const Works = () => {

   const [works,setWorks]=useState(null)
    useEffect(()=>{
        client.fetch(`*[_type=="works"]{
            imgUrl,title,description,codeLink,projectLink,
              technologies[]->
          }`).then((res)=>{setWorks(res)})
    },[])

  return (works &&
    <div className='min-h-screen flex-col justify-center md:items-center md:flex w-full mx-auto '>
        <Circles/>
        <h1 className='uppercase tracking-[10px] text-lg sm:text-xl md:text-3xl text-center mt-8 sm:mt-20'>My Projects</h1>
        <div className="container mx-auto mt-5">
                <motion.div 
                initial={{
                    opacity:0.4,y:100
                }}
                animate={{
                    opacity:1,scale:1,y:0
                }}
                transition={{
                    delay:0.1,duration:1
                }}
                className='w-full py-3 '>
                    <WorksSlider works={works} />
                </motion.div>
        </div>
        <Bulb/>
    </div>
  )
}

export default Works