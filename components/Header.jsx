"use client";
import React from 'react'
import Socials from './Socials'
import {motion} from "framer-motion";


const Header = () => {
  return (
    <div className='max-w-6xl w-full sticky z-40 mx-auto top-[2%]'>
      <div className='flex p-1 sm:p-0 justify-between items-center  md:flex-row gap-y-4'>

      <motion.div
      initial={{x:-500,
        opacity:0,scale:0.5,
        }}
        animate={{
          x:0,opacity:1,scale:1,
        }}
        transition={{
          duration:2,
        }}
      >
        <span className='font-bold text-xl sm:text-2xl md:text-3xl'>Vinay</span>
        <span className='text-accent font-semibold text-xl sm:text-2xl md:text-3xl'>.Kandagatla</span>
      </motion.div>
      <motion.div
      initial={{x:500,
        opacity:0,scale:0.5,
        }}
        animate={{
          x:0,opacity:1,scale:1,
        }}
        transition={{
          duration:2,
        }}
      >
        <Socials/>
      </motion.div>
      </div>
    </div>
  )
}

export default Header