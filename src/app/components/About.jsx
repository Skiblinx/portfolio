import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-6 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 sm:w-[90%]'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>I am not your normal developer</p>
          <p className='py-2 text-gray-600'>I have spent the last 3 years in the building industry working as an interior decorator. I have always had a knack for technology and working with computers. In 2021, I started working with HTML and CSS to make some minor edits. What I thought was just a few small edits turned into a love for programming.</p>
          <p className='py-2 text-gray-600'>
            Facinated by how intricate programming can be, I was quickly drawn to learn more. I started learning JavaScript and was even more enthused by making websites interactive. I began searching for opportunities to get significant experience soon after I graduated in January 2023 in an effort to become world-class, which eventually led me to volunteer at a non-profit organization. Now, I spend my time learning new technologies while developing applications with ReactJS and NextJs.

          </p>
          <Link href='#project'>
            <p className='underline py-2 text-gray-600 cursor-pointer'>Checkout some of my latest projects.</p>
          </Link>
        </div>
        <div className='w-full h-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-xl w-full h-full' src='/../assets/IMG.jpg' alt='Blinxz Profile' width={350} height={85} />
        </div>
      </div>
    </div>
  )
}

export default About