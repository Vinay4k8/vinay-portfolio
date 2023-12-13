"use client"
import React, { useEffect, useState } from 'react'
import BackGroundCircles from "@/components/BackGroundCircles"
import BottomRightimg from "@/components/BottomRightimg"
import Profile from "@/components/Profile"
import ProjectStar from "@/components/ProjectStar"
import { HiArrowDown } from "react-icons/hi2"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { client, urlFor } from '@/lib/client'
import Link from 'next/link'

const HomePage = () => {
    const [pageInfo,setPageInfo]=useState(null);
    const [text,count]=useTypewriter({
        words:pageInfo!==null?pageInfo.backgroundInfo:["web developer"],
        loop:true,
        delaySpeed:2000,
      })
     
      useEffect(()=>{
        client.fetch(`*[_type=="pageInfo"]`).then((res)=>{setPageInfo(res[0])})
      },[])

  return (pageInfo &&
    <div>
        <div className="relative flex items-center justify-center text-center mt-10 z-0]">
     <BackGroundCircles/>
     <Profile imgurl={urlFor(pageInfo.heroImage).url()}/>
      </div>
      <h2 className="text-sm tracking-[15px] uppercase pb-2 mt-2 ">
        {pageInfo.role}
      </h2>
      <div className="md:text-4xl text-lg sm:text-2xl">
      <span>
         {text}
      </span>
       <Cursor cursorColor="#F13024" />
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Link   href={"/vinay-resume.pdf"} target='_blank'
          download={true} className='cursor-pointer relative z-10'>
          <button className="bg-white text-black px-4 py-2 rounded-full text-base sm:text-lg group font-semibold hover:scale-105 duration-300 transition-all "
          
          >
            Download cv
            <HiArrowDown  className="h-5 font-bold  w-5 mx-1 group-hover:translate-y-[3px] inline transition-all duration-200 ease-in-out"/>
            </button></Link>
      <ProjectStar/>
      </div>
      <BottomRightimg/>
    </div>
  )
}

export default HomePage