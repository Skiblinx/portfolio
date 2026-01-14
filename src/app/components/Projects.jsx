import Image from 'next/image'
import React from 'react'
import portfolioImg from '../../../public/assets/portfolioImg.png'
import tailordom from '../../../public/assets/Tailordom.png'
import quiickops from '../../../public/assets/QuiickOps.png'
import store from '../../../public/assets/store.png'
import foodBag from '../../../public/assets/foodBag.png'
import hikMind from '../../../public/assets/HikMind.png'
import gtfinder from '../../../public/assets/gtfinder.png'
import FlashChange from '../../../public/assets/flashChangee.png'
// import Link from 'next/link'
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
            projectUrl='https://www.tailordom.com/'
            description='This is an online platform that allows users to create professional websites without coding. It features an intuitive drag and drop interface for easy website building.'
          />
          <ProjectItem
            title='QuiickOps'
            bgImage={quiickops}
            framework='ReactJs/TypeScript'
            description='This is an HR management platform that streamlines workforce operations for businesses of all sizes, offering tools for recruiting, onboarding, performance management, and employee engagement.'
            projectUrl='https://www.quiickops.com/' />
          <ProjectItem
            title='FlashChange'
            bgImage={FlashChange}
            framework='ReactJs/TypeScript'
            description=' FlashChange is a platform for fast, secure crypto to fiat exchanges, supporting multiple cryptocurrencies with competitive rates and quick transactions'
            projectUrl='https://www.flashchange.io/' />
          <ProjectItem
            title='Falz Store'
            bgImage={store}
            framework='ReactJs/TypeScript/Redux'
            projectUrl='https://bazar-admin-panel-ts.vercel.app/'
            description='A sleek and responsive admin dashboard for managing e-commerce activities. it simplifies product, order, and user management with real time analytics.'
          />
          <ProjectItem
            title='FoodBag'
            bgImage={foodBag}
            framework=''
            projectUrl='https://food-bag.vercel.app/'
            description='An easy to use platform for ordering your favorite meals online, designed for simplicity and convenience. Perfect for quick, stress free food delivery'
          />
          <ProjectItem
            title='HikMinder'
            bgImage={hikMind}
            framework=''
            projectUrl='https://hikminderr.vercel.app/'
            description='A simple tool designed for students and lecturers to easily track and manage their daily classes. Stay organized and never miss a session.'
          />
          <ProjectItem
            title='GitHub Profile Finder'
            bgImage={gtfinder}
            framework=''
            description='Easily search for GitHub profiles and explore user details in a simple and streamlined interface. Built with TypeScript for a smooth experience.'
            projectUrl='https://github-finder-typescript-kzjx.vercel.app/' />
          <ProjectItem
            title='Portfolio Site'
            bgImage={portfolioImg}
            framework='Next Js'
            projectUrl='https://blinxz.netlify.app/'
          />

        </div>
      </div>
    </div>
  )
}

export default Projects