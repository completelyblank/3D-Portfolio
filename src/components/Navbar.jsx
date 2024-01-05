import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
        <NavLink to ="/" className="w-12 h-12 rounded-full bg-gray-600 items-center justify-center flex font-bold shadow-md">
            <p className="red-gradient_text">M.R.K</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to ="/about" className={({isActive}) => isActive ? 
            'text-red-600 underlined' : 'text-black'}>
            About Me: 
            </NavLink>
            <NavLink to ="/projects" className={({isActive}) => isActive ? 
            'text-red-600 underlined' : 'text-black'}>
            Projects: 
            </NavLink>
            <NavLink to ="/contact" className={({isActive}) => isActive ? 
            'text-red-600 underlined' : 'text-black'}>
            Contact Here: 
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar;