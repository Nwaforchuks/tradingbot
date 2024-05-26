import React from 'react'
import bitmex from './bitmex.png'

const footer = () => {
  return (
    <footer className='w-full bg-black bottom-0 z-10  mt-32 fixed'>
       <div className='flex flex-row justify-center space-x-4 py-4 '>
        <img alt='bitmex' src={bitmex} className='w-9 h-9 inline-block'></img>
        <p className='text-white text-center'>&copy; ConstantineApp</p>
        <a href='mailto:chukwuman03@gmail.com' className='text-center text-white'>Contact Us</a>
       </div>
      </footer>
  )
}

export default footer