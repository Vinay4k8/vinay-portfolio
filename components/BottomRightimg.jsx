import Image from 'next/image'
import React from 'react'

const BottomRightimg = () => {
  return (
    <div className='absolute  right-0 bottom-0 mix-blend-color-dodge z-10 w-[400px] xl:w-[600px] '>
    <Image width={700} height={700} src={"/bg-explosion.png"}/>
</div>
  )
}

export default BottomRightimg