import React from 'react'
import { featuresText } from '../constants/constants'

const cardFeatureHtml = featuresText.map(featureText => {
  return (
    <div key={featureText.id} className='px-6 py-4 md:shadow-2xl md:border-none border-b-4 border-slate-800'>
      <h1 className='text-white font-bold text-3xl mb-3'>{featureText.title}</h1>
      <p className='text-white '>{featureText.content}</p>
    </div>
  )
})

const Features = () => {
  return (
    <section className='bg-primary'>
      <div className='flex justify-evenly md:flex-nowrap flex-wrap gap-5'>
        {cardFeatureHtml}
      </div>
    </section>
  )
   
}

export default Features;