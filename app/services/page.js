"use client"

import Bulb from '@/components/Bulb'
import Circles from '@/components/Circles'
import ServiceSlider from '@/components/ServiceSlider'
import React from 'react'
import {motion} from "framer-motion"
import Transition from '@/components/Transition'
const page = () => {
  return (
    <div className='min-h-screen flex  items-center mx-auto '>
        <Circles/>
        <Transition/>
        <div className="container mx-auto">
            <div className='flex flex-col xl:flex-row gap-x-4 md:gap-x-8'>
                <div className='text-center flex xl:w-[30vw] felx-col lg:text-left mb-2 md:mb-4 xl:mb-0'>
                    <motion.div 
                    initial={{
                        opacity:0.4,y:-100
                    }}
                    animate={{
                        opacity:1,scale:1,y:0
                    }}
                    transition={{
                        delay:0.1,duration:1
                    }}
                    >
                    <h1 className='sm:text-xl text-lg md:text-3xl xl:mt-8'>I Know that Good Apps means Good Business </h1>
                        <p className='mb-4 text-xs sm:text-sm md:text-base max-w-[400px] mx-auto lg:mx-0'>
                        As a student, I bring a diverse skill set to the table, covering web design, frontend, and backend development. Proficient in Next.js for server-side rendering, I merge design flair with technical know-how to create engaging and functional websites. Committed to delivering standout projects that reflect both creativity and expertise.
                         </p>
                    </motion.div>
                </div>
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
                
                className='w-full xl:max-w-[65%]'>

                    <ServiceSlider/>
                </motion.div>
            </div>
        </div>
        <Bulb/>
    </div>
  )
}

export default page