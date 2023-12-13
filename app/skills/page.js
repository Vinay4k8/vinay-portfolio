"use client"

import Transition from '@/components/Transition'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

const page = () => {
  return (
    <AnimatePresence mode='wait'>
    <div>
       <Transition key={"s"}/>
       page
    </div>
    </AnimatePresence>
  )
}

export default page