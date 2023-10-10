import React from 'react'

const Contact = () => {
  return (
    <div className=' bg-slate-600 min-h-screen w-full flex justify-center items-center'>
        <main className=' w-[70%]  bg-blue-900 sm:h-96 h-[500px] sm:rounded-[100px] rounded-3xl'>
            <h1 className=' text-center text-2xl font-josef font-semibold underline'>Contact</h1>
            <form className='flex justify-center items-center flex-col m-16'>
                <div className='conform'>
                <label className='label'>Name :</label>
                    <input type="text"  placeholder='Enter your name..' className='input'/> 
                </div>
                <div className='conform'>
                <label className='label'>Emai :</label>
                    <input type="email"  placeholder='Enter your email..' className='input' />    
                </div>
                <div className='conform'>
                <label className='label'>Massege:</label>
                    <input type="text"  placeholder='Enter your massege..' className='input'/>
                </div>
                <button className=' bg-red-500 hover:opacity-80 sm:w-32 w-20 sm:p-2 p-0 leading-tight rounded-full font-normal text-xl sm:font-bold font-josef '>Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contact