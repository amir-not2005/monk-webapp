import React from 'react'
import {navLinks} from '../constants/constants'

const navLinksHtml = navLinks.map(navItem => {
  return <a href='#' key={navItem.id} className='mx-5 text-white hover:underline hover:underline-offset-4'>{navItem.title}</a>
})

const Navbar = () => {
  return (
    <header>
        <nav className='p-2 flex flex-row justify-evenly items-center flex-wrap bg-slate-600'>
            {navLinksHtml}
        </nav>
    </header>
  )
}

export default Navbar

