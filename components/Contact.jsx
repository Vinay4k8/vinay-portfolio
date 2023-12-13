"use client"
import ResendMail from '@/lib/resend'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {BsArrowRight} from "react-icons/bs"
import Spinner from './Spinner'
import Link from 'next/link'


const Contact = () => {

const [contact,setContact]=useState({
  email:"",name:"",subject:"",message:""
})

const len=window.length

const [spinner,setSpinner]=useState(false)
const handleChange=(e)=>{
setContact((prv)=>{
  return {...prv,[e.target.name]:e.target.value}
})
}

  const sendMail=async()=>{
    setSpinner(true)
    const msg=await ResendMail(contact)
    if(msg.success) toast.success(msg.message)
    else toast.error(msg.message)
  setContact({
    email:"",name:"",subject:"",message:""
  })
  setSpinner(false)
  }

  return (
    <div className='flex justify-center md:items-center mt-5 md:my-0 h-screen max-w-6xl mx-3 xl:mx-auto'>
        <div className='text-left w-full mt-8  mx-auto'>
            <h1 className='md:text-3xl my-3 text-xl sm:text-2xl sm:tracking-widest text-left'>Lets <span className='text-accent'>.Connect</span></h1>
            <p className='text-gray-400 sm:tracking-wider text-sm my-3 mb-4 md:mb-10 text-center xl:text-left'>"Feel free to email me at <Link href={"mailto:vinaykumar4008@gmail.com"} className='underline decoration-accent'>vinaykumar4008@gmail.com </Link>or use the contact form."</p>
            <div className='flex flex-col gap-y-4 md:gap-y-10'>
                <div className='flex gap-x-4'>
                <input placeholder='Enter your  name'  type='text' value={contact.name} onChange={(e)=>{handleChange(e)}} required name='name' className='p-2 w-full bg-transparent outline-none focus:border-b-[2px]  focus:border-b-accent shadow-lg border-b-2  text-white duration-300 transition-all border-b-[#332267]'/>
                <input placeholder='Enter your email' type='text' value={contact.email} onChange={(e)=>{handleChange(e)}} required name='email' className='p-2 w-full bg-transparent outline-none focus:border-b-[2px]  focus:border-b-accent shadow-lg border-b-2  text-white duration-300 transition-all border-b-[#332267]'/>
                </div>
            
            <input placeholder='Subject' type='text' value={contact.subject} onChange={(e)=>{handleChange(e)}} required name='subject' className='p-2 w-full bg-transparent outline-none focus:border-b-[2px]  focus:border-b-accent shadow-lg border-b-2  text-white duration-300 transition-all border-b-[#332267]'/>
            <textarea placeholder='Message' type='text' value={contact.message} onChange={(e)=>{handleChange(e)}} required name='message' className='p-2 w-full bg-transparent outline-none focus:border-b-[2px]  focus:border-b-accent shadow-lg border-b-2  text-white duration-300 transition-all border-b-[#332267]' rows={len>=1200?7:len>650?5:4}  />
            <button onClick={sendMail}
            disabled={spinner}
            className={`${spinner && "cursor-not-allowed"} -mt-1 sm:-mt-0 relative btn flex justify-center items-center group border-2 border-[#332267] duration-300 transition-all hover:border-accent overflow-hidden w-max rounded-full sm:py-3 px-4 py-2 sm:px-8`}>
           {!spinner ? <><span className='group-hover:-translate-y-[120%] group-hover:opacity-0 duration-500 transition-all'>
                Let's talk
            </span>
            <BsArrowRight className='text-[22px]  group-hover:opacity-100 duration-500 transition-all group-hover:flex absolute  group-hover:-translate-y-0 opacity-0 -translate-y-[120%] '/></> :<Spinner/>}
            </button>
            </div>
        </div>
    </div>
  )
}

export default Contact