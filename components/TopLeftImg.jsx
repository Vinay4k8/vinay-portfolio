import Image from 'next/image'
import React from 'react'

const TopLeftImg = () => {
  return (
    <div className='absolute z-10 left-0 top-0 mix-blend-color-dodge  w-[120px] xl:w-[400px] animate-pulse'>
        <Image width={400} height={400} src={"/top-left-img.png"}/>
    </div>
  )
}

export default TopLeftImg