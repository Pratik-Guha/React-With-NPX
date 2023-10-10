import React from 'react'
import Logo from '../Header/Logo'

const Footer = () => {
  return (
    <footer className=' bg-gray-900 text-gray-400 h-1/2 '>
        <Logo/>
        <div className='gap-2 mt-4'>
           <h1 className="font-josef text-2xl font-normal">
            Welcome to <span className=" text-pink-700"> Npx Project</span>
          </h1>
          <p>@all right reserved &copy;</p>
        </div>

        <div className='flex justify-center items-center underline text-xl font-popin '>
            <div className='flex flex-col m-8 gap-2 '>
                <a href="/#">home</a>
                <a href="/#about">about</a>
                <a href="/contact">contact</a>
            </div>
            <div className='flex flex-col m-8 gap-2'>
                <a href="https://github.com/Pratik-Guha" target='blank'>Github</a>
                <a href="https://www.linkedin.com/in/pratik-guha-ba97011b4/" target='blank'>LinkdIn</a>
                <a href="https://www.youtube.com/playlist?list=PL8BAn8peeijA0YnPVuZwGbHRt-gCVmeU8" target='blank'>Youtube</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer