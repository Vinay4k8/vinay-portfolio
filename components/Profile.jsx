import Image from 'next/image'
import React from 'react'

const Profile = ({imgurl}) => {
  return (
    
        <Image
        src={imgurl}
        width={200}
        height={200}
        className='relative mx-auto rounded-full h-[100px] w-[100px] sm:h-[250px] sm:w-[250px] object-center object-cover '
        alt='profile'
        />
        
    
  )
}

export default Profile