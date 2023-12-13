"use client"




import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'



import {Swiper,SwiperSlide} from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules';


import Image from "next/image";
import { RxArrowTopRight, RxRocket } from "react-icons/rx";
import { RiGithubLine } from "react-icons/ri";
import Link from 'next/link';
import { urlFor } from '@/lib/client';
  // import Swiper from 'swiper';
  // data



const imgUrl="data:image/jpeg;base64,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"


const worksData=[1,2,3,4]
  const ServiceSlider = ({works}) => {
    const isXlScreen = window.innerWidth >= 1280; // Adjust the breakpoint as needed

    return <Swiper
    breakpoints={{
        320:{
            slidesPerView:1,spaceBetween:15
        },
        640:{
            slidesPerView:1,spaceBetween:15
        },
    }}
    freeMode={true}
    pagination={{
        clickable:true
    }}
    navigation={isXlScreen}
    modules={[Navigation,Pagination]}
    className="h-[500px] w-full"
    >
{
    works.map((item,index)=>{
        return(
            <SwiperSlide key={index}>
                <div className="w-full h-full rounded-lg  md:py-2 items-center gap-2 flex flex-col md:flex-row group  md:gap-x-10 relative  md:px-14  " >
                  <div className="flex justify-center items-center gap-2  ">
                  <Image width={200} height={200} src={item.imgUrl?urlFor(item.imgUrl).url():imgUrl} alt='image'
                  className="mx-auto object-cover w-[150px] h-[200px] md:h-[300px] rounded-md opacity-90 md:w-[250px]"
                  />
                  </div>
                  <div className="flex-1 h-max md:h-[300px] mx-[0.2px] md:mx-2 bg-primary/10 rounded-md p-2 md:gap-y-3 gap-y-1 flex-col flex ">
                      <h3 className="md:text-xl text-base">Title : <span className="text-accent capitalize">{item.title}</span></h3>
                      <h3 className="text-base md:text-xl">Description : <span className="text-accent">{item.description}</span></h3>
                      <h3 className="text-base md:text-xl">Technologies : </h3>
                      <div className="flex gap-x-2 gap-y-4 flex-wrap">
                      {item.technologies!==null && item.technologies.map((tech,index)=>{
                            return <Image key={index} src={urlFor(tech.icon).url()} width={30} height={30} className="h-[20px] w-[20px] md:h-[30px] md:w-[30px] rounded-full" />
                        })}
                      
                      </div>
                      <h3 className="md:text-xl text-base">Code Link : <Link target='_blank' href={item.codeLink} className="text-accent hover:underline">Click here<RiGithubLine className='inline'/></Link></h3>
                      <h3 className=" text-base md:text-xl">Deployed Url : <Link target='_blank' href={item.projectLink} className="text-accent hover:underline">Click here <RxRocket className='inline'/></Link></h3>
                  </div>
                  <RxArrowTopRight className="absolute bottom-2 right-[2%] text-3xl group-hover:rotate-45 group-hover:text-accent duration-300 transition-all" />
                </div>
            </SwiperSlide>
        )
    })
}
    </Swiper>;
  };
  
  export default ServiceSlider;