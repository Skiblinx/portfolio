// "use client";
import Image from 'next/image'
import React from 'react'
import portfolioImg from '../../../public/assets/portfolioImg.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'


const portfolio = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={portfolioImg} alt='portfolio' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-50% right-[-50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Portfolio Site</h2>
          <h3>NextJs / Tailwind</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>This project is built using NextJs and is hosted on . It is meant to tell a little about me and my vision, show skills and a sneakpick of projects I have built with what Technology was used. </p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />NextJs</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Tailwind</p>
            </div>
          </div>
        </div>
      </div>
      <Link href='/#project'>
        <p className='underline cursor-pointer'>Back</p>
      </Link>
    </div>
  )
}

export default portfolio