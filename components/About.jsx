"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import SkillCard from './SkillCard';
import { client, urlFor } from '@/lib/client';
const headings=["About","Skills"]

const skills=[1,2,3,4,6,7,8,9,10]
const About = () => {
    const [index,setIndex]=useState(0);
    const [abouts,setAbouts]=useState(null);
    const [skills,setSkills]=useState(null)
    useEffect(()=>{
        client.fetch(`*[_type=="abouts"]`).then((res)=>{setAbouts(res[0])});
        client.fetch(`*[_type=="skills"]`).then((res)=>{setSkills(res)})
    },[])
    
  return (abouts && skills &&
    <div className='container mx-auto xl:mt-[6%] flex flex-col justify-center xl:flex-row gap-x-6'>
        <div className='flex flex-col justify-center '>
        <div className='mt-10 flex gap-x-4  xl:gap-x-8 mx-auto xl:mx-0 mb-4 justify-center '>
        {headings.map((item,itemIndex)=>{
            return (<button  onClick={()=>{setIndex(itemIndex)}}
            className={`${index===itemIndex && "after:w-[100%]  after:bg-accent after:duration-300   after:transition-all text-accent "} capitalize tracking-widest cursor-pointer xl:text-lg relative after:w-4 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
            key={itemIndex}>
                {item}
            </button>)
        })}
        </div>
        <div>
            {index==0 && <motion.div 
            initial={{
                y:50,opacity:0
            }}
            animate={{
                y:0,opacity:1
            }}
            transition={{
                duration:1.5,delay:0.3
            }}
            className='flex xl:flex-row flex-col gap-x-8 gap-y-4 justify-center items-center z-20'>
                <Image
                width={200}
                height={200}
                className='rounded-full object-center object-cover xl:w-[400px] xl:h-[400px] xl:rounded-md w-[140px] h-[140px]'
                src={urlFor(abouts.imgUrl).url()}
                />
                <div className='gap-2 tracking-wide text-base mt-3 xl:text-lg'>
                {abouts.description}
                </div>
                </motion.div>}
                {index==1 && <div  className=''>
                <h1 className='text-center text-3xl uppercase tracking-[10px] mt-7'>
                    Skills
                </h1>
                <p className=' text-center capitalize text-sm xl:text-lg mt-5 mb-8 tracking-widest '>
                    hover over a skill for current proficiency
                </p>
                
                    <motion.div className='grid grid-cols-4 md:grid-cols-5 mx-auto md:ml-10  text-center gap-x-4 xl:gap-x-10 gap-y-10'>
                    {skills.map((skill,index)=>{
                            return <SkillCard key={index} title={skill.title} icon={urlFor(skill.icon).url()} progress={skill.progress} /> 
                        })}
                    </motion.div>
                    
                    </div>}
        </div>
        </div>
    </div>
  )
}

export default About