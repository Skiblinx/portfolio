import Image from 'next/image'
import React from 'react'
import portfolioImg from '../../../public/assets/portfolioImg.png'
import tailordom from '../../../public/assets/Tailordom.png'
import quiickops from '../../../public/assets/Quiickops.png'
import store from '../../../public/assets/store.png'
import foodBag from '../../../public/assets/foodBag.png'
import hikMind from '../../../public/assets/HikMind.png'
import gtfinder from '../../../public/assets/gtfinder.png'
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
            title='Tailordom'
            bgImage={tailordom}
            framework='ReactJs/TypeScript'
            projectUrl='https://www.tailordom.com/' />
          <ProjectItem
            title='QuiickOps'
            bgImage={quiickops}
            framework='ReactJs/TypeScript'
            projectUrl='https://www.quiickops.com/' />
          <ProjectItem
            title='Falz Store'
            bgImage={store}
            framework='ReactJs/TypeScript/Redux'
            projectUrl='https://bazar-admin-panel-ts.vercel.app/' />
          <ProjectItem
            title='FoodBag'
            bgImage={foodBag}
            framework=''
            projectUrl='https://food-bag.vercel.app/' />
          <ProjectItem
            title='HikMinder'
            bgImage={hikMind}
            framework=''
            projectUrl='https://hikminderr.vercel.app/' />
          <ProjectItem
            title='GitHub Profile Finder'
            bgImage={gtfinder}
            framework=''
            projectUrl='https://github-finder-typescript-kzjx.vercel.app/' />
          <ProjectItem
            title='Portfolio Site'
            bgImage={portfolioImg}
            framework='Next Js'
            projectUrl='/portfolio' />

        </div>
      </div>
    </div>
  )
}

export default Projects