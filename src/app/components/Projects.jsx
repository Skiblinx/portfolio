import Image from 'next/image'
import React from 'react'
import portfolioImg from '../../../public/assets/portfolioImg.png'
import fitnessImg from '../../../public/assets/fitnessImg.png'
import taleem from '../../../public/assets/taleem-admin.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'


const Projects = () => {
  return (
    <div id='project' className='w-full'>
      <div className='max-w-[1240] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Portfolio Site'
            bgImage={portfolioImg}
            framework='Next Js'
            projectUrl='/portfolio' />
          <ProjectItem
            title='Fitness App'
            bgImage={fitnessImg}
            framework='React Js'
            projectUrl='/fitnessApp' />
          <ProjectItem
            title='Mkan Taleem-Admin Dashboard'
            bgImage={taleem}
            framework='Next Js'
            projectUrl='/taleem-admin' />

        </div>
      </div>
    </div>
  )
}

export default Projects