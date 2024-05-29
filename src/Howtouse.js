import React from 'react'
import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import how from './how-it-works.webp'

const How_to_use = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    let log = JSON.parse(sessionStorage.getItem('login'))
    if(log){

       navigate('/profile')
    }
  },[])
  return (

    <div className='flex flex-col overflow-auto mb-32'>

      <img alt='how it works' src={how} className='cover w-full block mx-auto  sm:w-80 sm:h-80 sm:block sm:mx-auto'>
      </img>

      <div className='bg-green-400 h-fit overflow-auto rounded-xl mx-3'>
        <label className='mx-auto text-center block bg-blue-400 w-full rounded-xl text-sm font-bold text-slate-50'>About our Trading Bot</label>
        <div className='bg-green-400 h-fit overflow-auto rounded-xl sm:grid sm:grid-cols-3'>

        <p className=' mx-2 mt-2 mb-2 text-sm text-slate-50 bg-green-700 rounded-xl px-2 py-2'>
        Our robots are built with BitMEX api service which lets us generate trading 

        signals or place orders, and also auto manage trades to ensure, you make 

      profit in all your investments in our platform
        </p>

        <p className=' mx-2 mt-2 mb-2 text-sm text-slate-50 bg-green-700 rounded-xl px-2 py-2'>
          Our Ai, is programmed to trade constantly, 24 hours a day, 7days a week to ensure our users make daily profit
        </p>

        <p className=' mx-2 mt-2 mb-2 text-sm text-slate-50 bg-green-700 rounded-xl px-2 py-2'>
          Our Ai are designed to remove tradings psychological element, which can be detrimental
        </p>

        </div>
        
        <label className='mx-auto text-center block bg-blue-400 w-full rounded-xl text-sm font-bold text-slate-50'>How to use?</label>

        <p className=' mx-2 mt-2 mb-2 text-sm text-slate-50 bg-green-700 rounded-xl px-2 py-2 text-center'>
         After depositing just click on (Start bot) button then select the crypto you wish to invest in and how much/percent you wish to invest. then click start button<br></br><br></br>
         To use, you must create account and login first.
        </p>

        <label className='mx-auto text-center block bg-blue-400 w-full rounded-xl text-sm font-bold text-slate-50'>How do you pay?</label>
        <p className=' mx-2 mt-2 mb-2 text-sm text-slate-50 bg-green-700 rounded-xl px-2 py-2 text-center'>
         Our trading AI automatically deduct 0.03 percent of your daily profits.
        </p>
      </div>
    </div>
   
      

    
  )
}

export default How_to_use