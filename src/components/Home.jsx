import React from 'react'
import image from '../../public/image.jpg'
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
import { IoDocumentText } from "react-icons/io5";

const Home = () => {
  return (
    <div id='home' className='flex min-h-screen w-full items-center justify-center'>

        <div className='flex flex-col items-center justify-center gap-8 p-5 text-center'>
            
            <img src={image} alt="" className='w-[250px] sm:w-[300px] rounded-full' />

            <div className='space-y-1 sm:space-y-3'>

              <h1 className='bg-gradient-to-r from-[#538d61] to-[#1e453e] bg-clip-text
              text-4xl font-semibold text-transparent
              md:text-5xl lg:text-6xl py-2'>Gwyneth Phang</h1>

              <h3 className='bg-gradient-to-r from-[#1e453e] to-[#182c25] bg-clip-text
              text-xl font-semibold text-transparent
              md:text-2xl lg:text-3xl'>Software Developer</h3>

              {/* <p className='max-w-[500px] text-sm text-gray-500'>Loren ipsum dolor</p> */}
            </div>

            <div className='flex gap-3'>
              {/* Github Button */}
              <a 
                href="https://github.com/gphang" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full
                border-2 border-transparent bg-[#2c4c3b] p-2 text-white transition-all duration-200
                hover:scale-110 hover:border-[#2c4c3b] hover:bg-white hover:text-[#2c4c3b] md:h-12 md:w-12' />
              </a>

              {/* Linkedin Button */}
              <a 
                href="https://www.linkedin.com/in/gwyneth-phang/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full
                border-2 border-transparent bg-[#2c4c3b] p-2 text-white transition-all duration-200
                hover:scale-110 hover:border-[#2c4c3b] hover:bg-white hover:text-[#2c4c3b] md:h-12 md:w-12' />
              </a>

              {/* Resume Button */}
              <a
                href="/public/GwynethPhang_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className='flex items-center justify-center'>
                  <IoDocumentText className='h-10 w-10 cursor-pointer rounded-full
                    border-2 border-transparent bg-[#2c4c3b] p-2 text-white transition-all duration-200
                    hover:scale-110 hover:border-[#2c4c3b] hover:bg-white hover:text-[#2c4c3b] md:h-12 md:w-12' />
                </div>
              </a>

            </div>
        </div>
    </div>
  )
}

export default Home