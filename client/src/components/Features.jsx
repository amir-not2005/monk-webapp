import React from 'react'
import { featuresText } from '../constants/constants'

const Features = () => {
  return (
    <section className='bg-slate-600'>
      <h1 className='text-white'>
        Hello {featuresText[0].content}
      </h1>
    </section>
  )
   
}

export default Features;