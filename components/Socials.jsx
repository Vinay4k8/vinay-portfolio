import Link from 'next/link'
import React from 'react'
import {RiGithubLine, RiInstagramLine, RiLinkedinLine} from "react-icons/ri"


const Socials = () => {
  return (
    <div className='flex gap-4'>
        <Link href={"https://www.instagram.com/k_vinay.20/"} target='_blank'>
        <RiInstagramLine className='sm:h-7 sm:w-7 w-5 h-5'/>
        </Link>
        <Link href={"https://github.com/Vinay4k8"} target='_blank'>
        <RiGithubLine className='sm:h-7 sm:w-7 w-5 h-5' />
        </Link>
        <Link href={"https://www.linkedin.com/in/vinay-kumar-kandagatla-0248aa269/"} target='_blank'> 
        <RiLinkedinLine className='sm:h-7 sm:w-7 w-5 h-5' />
        </Link> 
    </div>
  )
}

export default Socials