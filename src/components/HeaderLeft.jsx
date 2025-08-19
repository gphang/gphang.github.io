import React from 'react'
import { BiSolidHomeHeart, BiSolidBriefcaseAlt, BiSolidGraduation, BiCode, BiMailSend, BiRightArrowAlt } from 'react-icons/bi'
import { TiLeaf } from "react-icons/ti";

const HeaderLeft = () => {
  return (
    <div className='md:flex-[1]'>
        <div className='min-h-screen top-0
        hidden md:sticky md:flex
        items-center justify-center bg-[#2c4c3b] text-white'>
            <ul className='flex flex-col gap-10'>
                {["home", 'projects', 'experience', 'education'].map((item) => (
                    <li key={item} className='flex items-center justify-start
                    cursor-pointer font-medium transition-all duration-200 group
                    sm:text-lg md:text-xl xl:text-3xl'>

                        <TiLeaf className='text-4xl rotate-90 -translate-x-5 opacity-0
                        transform transition-all duration-200 group-hover:opacity-100
                        group-hover:translate-x-0' />
                        
                        <a href={`#${item}`}
                        className='transition-all duration-200 hover:translate-x-3'>
                            {item}</a>
                        
                    </li>
                ))} 
            </ul>
        </div>

        <div className='fixed left-0 right-0 top-0 z-10
        flex justify-evenly bg-[#2c4c3b] p-5 text-white md:hidden'>
            <a href='#home' className='flex flex-col items-center justify-center'>
                <BiSolidHomeHeart className='text-2xl' />
                <span className='text-xs'>Home</span>
            </a>
            <a href='#projects' className='flex flex-col items-center justify-center'>
                <BiCode className='text-2xl' />
                <span className='text-xs'>Projects</span>
            </a>
            <a href='#experience' className='flex flex-col items-center justify-center'>
                <BiSolidBriefcaseAlt className='text-2xl' />
                <span className='text-xs'>Experience</span>
            </a>
            <a href='#education' className='flex flex-col items-center justify-center'>
                <BiSolidGraduation className='text-2xl' />
                <span className='text-xs'>Education</span>
            </a>
        </div>  
    </div>
  )
}

export default HeaderLeft