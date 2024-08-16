import Image from 'next/image'
import Link from 'next/link'
// import portfolioImg from '../../../public/assets/portfolioImg.png'

const ProjectItem = ({ title, bgImage, framework, projectUrl, description }) => {
  return (

    <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <Image className='rounded-xl group-hover:opacity-10' src={bgImage} alt='portfolio project' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-widest text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{framework}</p>

        <p className='text-center py-3 rounded-lg text-gray-300 w-full tracking-widest font-bold text-lg'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectItem