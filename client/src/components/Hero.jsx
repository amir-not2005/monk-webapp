import React from 'react'
import { heroText } from '../constants/constants'



const Hero = () => {
  return (
    <section className='bg-black flex items-center justify-center h-screen'>
      <div className='max-w-screen-lg py-5 px-2 grid grid-cols-12 my-auto mx-auto'>
        <div className='sm:col-span-8 col-span-12'>
          <h1 className='text-white font-extrabold text-5xl mb-5'>{heroText[0].title}</h1>
          <p className='text-white text-1xl font-medium mb-5'>{heroText[0].content}</p>
        </div>
        <div className='sm:col-span-4 col-span-12 sm:my-auto sm:mx-auto'>
          <a href="#" className='text-white border-2 px-2 py-1 mb-4 block w-24 text-center'>{heroText[1].title}</a>
          <a href="#" className='text-white border-2 px-2 py-1 mb-4 block w-24 text-center'>{heroText[2].title}</a>
        </div>
      </div>
    </section>
  )
}

export default Hero