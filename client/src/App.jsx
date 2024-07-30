import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'

export default function App() {
  return (
    <main className='bg-slate-500'>
    <Navbar />
    <Hero />
    <Features />
  </main> 
  )
}