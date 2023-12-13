
import HomePage from "@/components/Home"

import Transition from "@/components/Transition"

export const  metadata={
  title:"Home",description:"Home page of vinay's portfolio"
}

export default function Home() {


  return (
    <main className='overflow-y-scroll relative min-h-screen flex flex-col  items-center text-center justify-center space-y-4'>
      <Transition/>
      <HomePage/>
    </main>
  )
}
