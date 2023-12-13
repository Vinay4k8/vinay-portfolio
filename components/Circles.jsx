import Image from 'next/image'
import React from 'react'

const Circles = () => {
  return (
    <div className='absolute bottom-0 right-0 animate-pulse mix-blend-color-dodge duration-500 transition-all '>
        <Image
        className='xl:w-[400px] w-[200px]'
        width={200}
        height={200}
        src={"/circles.png"}
        />
    </div>
  )
}

export default Circles