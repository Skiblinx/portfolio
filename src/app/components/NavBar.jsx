import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const NavBar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 '>
        <Image src='/../assets/Blinxz.svg' alt='Blinxz logo' width='70' height='50' />
        <div>
          <ul className='hidden md:flex'>
            <Link href=''>
              <li className='ml-10 text-xs uppercase hover:border-b'>Home</li>
            </Link>
            <Link href=''>
              <li className='ml-10 text-xs uppercase hover:border-b'>about</li>
            </Link>
            <Link href=''>
              <li className='ml-10 text-xs uppercase hover:border-b'>skills</li>
            </Link>
            <Link href=''>
              <li className='ml-10 text-xs uppercase hover:border-b'>projects</li>
            </Link>
            <Link href=''>
              <li className='ml-10 text-xs uppercase hover:border-b'>resume</li>
            </Link>
            <Link href=''>
              <li className='ml-10 text-xs uppercase hover:border-b'>contact</li>
            </Link>
          </ul>
          <div>
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar