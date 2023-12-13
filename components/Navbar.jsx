"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
  HiRectangleGroup,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/works', icon: <HiViewColumns /> },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {

  const pathName=usePathname()

  return <nav className='bottom-0 fixed right-0 h-max mt-auto z-50 top-0 w-full flex items-center flex-col xl:w-16 gap-y-4 xl:justify-center xl:h-screen xl:right-[2%] xl:py-8'>
    <div className='text-3xl backdrop-blur-sm xl:py-4 backdrop-filter w-full  flex  gap-y-10 px-4 justify-between items-center h-[80px] bg-white/10 xl:flex-col xl:rounded-full xl:h-max '>
      {navData.map((navLink,index)=>{
        return <Link href={navLink.path} 
        className={`${navLink.path===pathName && "text-accent "} hover:text-accent duration-200 transition-all`}
        key={index}>
        {navLink.icon}
        </Link>
      })}
    </div>
  </nav>;
};

export default Nav;