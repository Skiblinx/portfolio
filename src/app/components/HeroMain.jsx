import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const HeroMain = () => {
  return (
    <div className='w-full h-screen relative top-[30px] sm:top-10 text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase tracking-widest text-gray-600'>let&apos;s build something together</p>
          <h1 className='py-3 text-gray-700'>Hi, I&apos;m <span className='text-[#5651e5]'>Adeleye</span></h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I&apos;m a front-end web developer specializing in building exceptional degital experiences. Currently, I&apos;m focused on building responsive front-end web applications while learnig back-end.</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroMain