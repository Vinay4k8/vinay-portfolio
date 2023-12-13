import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {  HiArrowRight } from 'react-icons/hi2'

const ProjectStar = () => {
  return (
    <Link href={"/works"} className='flex relative z-20 justify-center items-center group'>
        <Image
        src={"/circle-star.svg"}
        width={120}
        height={120}
        alt='img'
        className='w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]'
        />
        <Image
        src={"/rounded-text.png"}
        width={100}
        height={100}
        alt={"img"}
        className='absolute animate-spin-slow w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]'
        />
        <HiArrowRight className='w-11 h-6 absolute group-hover:translate-x-2 transition-all duration-200 ease-in-out' />
    </Link>
  )
}

export default ProjectStar