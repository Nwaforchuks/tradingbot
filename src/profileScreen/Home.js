import React from 'react'
import verified from '../verifiedimg.svg'
import DataContext from '../store/store'
import { useEffect, useContext, useState } from 'react'

const Homejs = () => {

  const {profile,account} = useContext(DataContext);
  return (
    
    <section className='w-full h-fit mx-auto my-auto px-3'>
        <p className='font-semibold text-slate-800'>
          Hello {`${profile.name} ${profile.surname}`}<br></br>
          <span className='text-slate-800 font-thin'>welcome back!</span>
          
        </p>
        <div className='w-full h-20 bg-blue-700 rounded-xl shadow-2xl mt-2 flex flex-col'>
        <div className='mx-auto flex flex-row mt-5'>
          <img alt='safeimg' src={verified} className='w-4 '>
          </img>

          <p className='text-slate-50 text-sm'>Avalable Balance</p>
        
        </div>
        <p className='text-center text-slate-50 font-bold'>&#x24;{`${account.amount}`}</p>
        </div>

        <div className='w-full h-20 bg-green-700 rounded-xl shadow-2xl mt-6 flex flex-col'>
        <div className='mx-auto flex flex-row mt-5'>
          <img alt='safeimg' src={verified} className='w-4 '>
          </img>

          <p className='text-slate-50 text-sm'>Last Invest</p>
        
        </div>
        <p className='text-center text-slate-50 font-bold'>{`${account.trade_amount}`} &#x25;</p>
        </div>

        <div className='w-full h-20 bg-green-700 rounded-xl shadow-2xl mt-6 flex flex-col'>
        <div className='mx-auto flex flex-row mt-5'>
          <img alt='safeimg' src={verified} className='w-4 '>
          </img>

          <p className='text-slate-50 text-sm'>Last Crypto</p>
        
        </div>
        <p className='text-center text-slate-50 font-bold'>{`${account.crypto}`}</p>
        </div>

        <div className='w-full h-20 bg-green-700 rounded-xl shadow-2xl mt-6 flex flex-col'>
        <div className='mx-auto flex flex-row mt-5'>
          <img alt='safeimg' src={verified} className='w-4 '>
          </img>

          <p className='text-slate-50 text-sm'>Last Transaction </p>
        
        </div>
        <p className='text-center text-slate-50 font-bold'>&#x24;{`${account.last_transsaction}`}</p>
        </div>

        <div className='w-full h-20 bg-green-700 rounded-xl shadow-2xl mt-6 flex flex-col'>
        <div className='mx-auto flex flex-row mt-5'>
          <img alt='safeimg' src={verified} className='w-4 '>
          </img>

          <p className='text-slate-50 text-sm'>Trade State</p>
        
        </div>
        <p className='text-center text-slate-50 font-bold'>{`${account.tradeposition}`}</p>
        </div>

      </section>
  )
}

export default Homejs