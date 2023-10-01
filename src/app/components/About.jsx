import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-6 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 sm:w-[90%]'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>I am not your normal developer</p>
          <p className='py-2 text-gray-600'>I have spent the last 12 years in the fire service working as a professional firefighter & paramedic. I have always had a knack for technology and working with computers. In 2019 I started working with HTML & CSS to make some minor edits on a small business website that I was operating. What I thought was just a few small edits turned into a love for programing.</p>
          <p className='py-2 text-gray-600'>Facinated with how intricate programing can be I was quickly drawn to learn more. I started learning JavaScript and was even more enthused with making websites interactive. I then started freelancing for e-commerce companies on the Shopify platform. I am now spending my time building projects with React JS, Firebase and learing new technologies.</p>
          <p className='underline py-2 text-gray-600 cursor-pointer'>Checkout some of my latest projects.</p>
        </div>
        <div className='w-full h-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-xl w-full h-full' src='/../assets/Blinxz.png' alt='Blinxz Profile' width={350} height={85} />
        </div>
      </div>
    </div>
  )
}

export default About