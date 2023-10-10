import React from 'react'
import { Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Logo from './Logo'

const Header = () => {
  return (
    <nav className='w-full flex sm:flex-row flex-col p-3 justify-between items-center sticky z-40 opacity-80 top-0 bg-slate-400 '>
        <Logo/>
      <main className='flex sm:justify-end justify-center w-[70%] gap-2 sm:gap-4 font-bold sm:text-xl text-sm '>
        
        <HashLink to={"/#"} className='hover:text-blue-600'>Home</HashLink>
        <HashLink to={"/#about"} className='hover:text-blue-600'>About</HashLink>
        <Link to={"/contact"} className='hover:text-blue-600'>Contact</Link>
        <HashLink to={"/#brands"} className='hover:text-blue-600'>Brands</HashLink>
        <Link to={"/services"} className='hover:text-blue-600'>Services</Link>
       
      </main>
    </nav>
  )
}

export default Header