import Image from 'next/image'
import {motion} from "framer-motion"
const SkillCard = ({icon,progress,title}) => {

  
  return (
    <motion.div
    initial={{
        x:-100, scale:1,opacity:0
    }}
    animate={{
        x:0,scale:1,opacity:1
    }}
    transition={{
        duration:1,delay:0.2
    }}
    className='flex flex-col items-center justify-center cursor-pointer'
    
     >
      <div 
      className='relative group rounded-full cursor-pointer w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] flex items-center justify-center text-center'>
        <Image fill 
        src={icon}
        className='w-full h-full absolute rounded-full'
        
        />
        
        <div className={`w-full h-full absolute text-center justify-center rounded-full items-center group-hover:flex hidden bg-white/80 text-accent xl:text-xl text-base font-bold transition-all duration-150 ease-in`}>
       
{progress}%
        </div>
        </div>
        <p className='xl:text-base text-xs uppercase mt-1 text-center inline'>{title}</p>
    </motion.div>
  )
}

export default SkillCard