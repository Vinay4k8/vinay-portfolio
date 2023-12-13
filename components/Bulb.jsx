import Image from 'next/image'
import React from 'react'

const Bulb = () => {
  return (
    <Image
    width={300}
    height={350}
    alt='image'
    src={"/bulb.png"}
    className='absolute -left-44 xl:-left-60 w-[250px] h-[300px] xl:w-[350px] xl:h-[400px] bottom-0 mix-blend-color-dodge animate-pulse duration-300 transition-all'
    />
  )
}

export default Bulb