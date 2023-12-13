"use client"
import {Swiper,SwiperSlide} from "swiper/react"
import {
    RxCrop,
    RxPencil2,
    RxDesktop,
    RxReader,
    RxRocket,
    RxArrowTopRight,
  } from "react-icons/rx";
  

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination'
  // import Swiper from 'swiper';
  import { Navigation, Pagination } from 'swiper/modules';
  // data
  const serviceData = [
    {
      icon: <RxCrop />,
      title: 'Backend Developer',
      description: 'I am a backend developer with a passion for building beautiful and functional web applications.',
    },
    {
      icon: <RxRocket />,
      title: 'Web Designer',
      description: 'I am a web designer with a passion for creating beautiful and functional web applications.',
    },
    {
      icon: <RxDesktop />,
      title: 'Frontend Developer',
      description: 'I am a frontend developer with a passion for building beautiful and functional web applications.',
    },
    {
      icon: <RxReader />,
      title: 'NextJS',
      description: ' Next.js developer dedicated to crafting high-performance web applications. Specializing in seamless user experiences .',
    },
   
  ];
  
  const ServiceSlider = () => {
    return <Swiper
    breakpoints={{
        320:{
            slidesPerView:1,spaceBetween:15
        },
        640:{
            slidesPerView:2,spaceBetween:15
        },
    }}
    
    pagination={{
        clickable:true
    }}
    modules={[Navigation,Pagination]}
    className="h-[240px] sm:h-[340px] z-10"
    >
{
    serviceData.map((item,index)=>{
        return(
            <SwiperSlide key={index}>
                <div className="bg-white/10 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer " >
                    <div className="text-accent text-3xl" >{item.icon}</div>
                    <div>
                        <div>{item.title}</div>
                        <div>{item.description}</div>
                    </div>
                    <div className="text-3xl" >
                        <RxArrowTopRight className="group-hover:rotate-45 duration-300 transition-all group-hover:text-accent"/>
                    </div>
                </div>
            </SwiperSlide>
        )
    })
}
    </Swiper>;
  };
  
  export default ServiceSlider;