import Image from 'next/image'
import React from 'react'
import Data from '../data/skillsData.js'

const Skills = () => {


  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I can do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          {Data.map(item => (
            <div key={item.id} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={item.image} alt={item.title} width='64' height='64' />
                </div>
                <div className='flex flex-col items-center justify-center uppercase'>
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  )
}

export default Skills