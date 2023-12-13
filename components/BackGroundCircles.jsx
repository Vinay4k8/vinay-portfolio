"use client"

import {motion} from "framer-motion"



const BackGroundCircles = () => {
  return (<div className="absolute">
    <motion.div 
    initial={{
        opacity:0,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:["20%","20%","50%","80%","20%"],
    }}
    transition={{
        duration:2.8
    }}
    className='flex items-center justify-center relative '>
        
        <div className='h-[200px] absolute w-[200px] rounded-full border border-[#332263f4]/80 animate-ping duration-300 transition-all ease-in-out ' 
        />
         <div className='h-[300px] absolute w-[300px] rounded-full border border-[#332263f4]/50 ' 
        />
         <div className='h-[500px] absolute w-[500px] rounded-full border border-[#332263f4]/50 ' 
        />
        <div className='h-[650px] absolute w-[650px] rounded-full border border-accent animate-pulse duration-300 transition-all ease-in-out' 
        />
         <div className='h-[800px] absolute w-[800px] rounded-full border border-[#332263f4]/40' 

        />
    </motion.div>
        </div>
  )
}

export default BackGroundCircles