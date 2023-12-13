"use client"
import {motion} from "framer-motion"


const transitionvariants={
    initial:{
        x:'100%' ,width:'100%'
    },
    animate:{
        x:'0%',width:'0%'
    },
    exit:{
        x:['0%','100%'],
        width:['0%','100%']
    }
}

const Transition = () => {
  return (
    <div>
        <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-[#2e2257]"
        variants={transitionvariants} initial="initial" animate="animate" exit="exit" transition={{delay:0.3,duration:0.6,ease:"easeInOut"}}
        >
        </motion.div>
        <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-[#3b2d71]"
        variants={transitionvariants} initial="initial" animate="animate" exit="exit" transition={{delay:0.4,duration:0.6,ease:"easeInOut"}}
        >
        </motion.div>
        <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#4b3792] "
        variants={transitionvariants} initial="initial" animate="animate" exit="exit" transition={{delay:0.6,duration:0.6,ease:"easeInOut"}}
        >
        </motion.div>
    </div>
  )
}

export default Transition