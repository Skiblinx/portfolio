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
          <p className='py-2 text-gray-600'>I am a results driven Frontend Developer with a unique perspective shaped by my studies in Economics. My transition into software engineering was fueled by a fascination with complex systems and the desire to build tools that solve real world problems through code.</p>
          <p className='py-2 text-gray-600'>
            My background in Economics provides me with a rigorous analytical framework, allowing me to approach development with a focus on efficiency, optimization, and data driven logic. Since 2021, I have immersed myself in the JavaScript ecosystem, specializing in React and Next.js to build high-performance applications. I am committed to writing clean, maintainable code and staying at the forefront of emerging technologies to deliver world class digital solutions.
          </p>
          <Link href='#project'>
            <p className='underline py-2 text-gray-600 cursor-pointer'>Checkout some of my latest projects.</p>
          </Link>
        </div>
        <div className='w-full h-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-xl w-full h-full' src='/assets/IMG1.jpg' alt='Blinxz Profile' width={350} height={85} />
        </div>
      </div>
    </div>
  )
}

export default About