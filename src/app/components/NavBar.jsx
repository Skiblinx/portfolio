"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)

      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])


  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>

      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 '>
        <Link href='/'>
          <Image src='/../assets/Blinxz.svg' alt='Blinxz logo' width='70' height='50' />
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-xs uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-xs uppercase hover:border-b'>about</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-xs uppercase hover:border-b'>skills</li>
            </Link>
            <Link href='/#project'>
              <li className='ml-10 text-xs uppercase hover:border-b'>projects</li>
            </Link>
            {/* <Link href='/#resume'>
              <li className='ml-10 text-xs uppercase hover:border-b'>resume</li>
  </Link>*/}
            <Link href='/#contact'>
              <li className='ml-10 text-xs uppercase hover:border-b'>contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>


      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ""}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] px-10 pt-5 ease-in duration-500' : 'fixed left-[-100%] top-0 px-10 pt-5 ease-in duration-500'}>
          <div className='flex items-center justify-between w-full'>
            <Image src='/../assets/Blinxz.svg' alt='Blinxz logo' width='87' height='35' />
            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose />
            </div>
          </div>
          <div className='border-b border-gray-300 my-3'>
            <p className='w-[85%] md:w-[90%] py-2 '>Let&apos;s build something legendary together</p>
          </div>
          <div className=''>
            <ul className='uppercase'>

              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-3 text-sm hover:scale-105 ease-in duration-500'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-3 text-sm hover:scale-105 ease-in duration-500'>about</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-3 text-sm hover:scale-105 ease-in duration-500'>skills</li>
              </Link>
              <Link href='/#project'>
                <li onClick={() => setNav(false)} className='py-3 text-sm hover:scale-105 ease-in duration-500'>projects</li>
              </Link>
              {/* <Link href='/#resume'>
                <li onClick={() => setNav(false)} className='py-3 text-sm hover:scale-105 ease-in duration-500'>resume</li>
  </Link>*/}
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-3 text-sm hover:scale-105 ease-in duration-500'>contact</li>
              </Link>
            </ul>

            <div className='pt-10'>
              <p className='uppercase tracking-widest text-[#5651e5]'>let&apos;s connect</p>
              <div className='flex item-center justify-around my-3 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar