import React from 'react'
import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import deposit from './how_dposit.webp'

export default function Howtodepo() {
  const navigate = useNavigate()
  useEffect(()=>{
    let log = JSON.parse(sessionStorage.getItem('login'))
    if(log){

       navigate('/profile')
    }
  },[])
  return (
    <div className='flex flex-col overflow-auto mb-32'>
        
        <img alt='how to deposit' src={deposit} className='cover w-full block mx-auto  sm:w-80 sm:h-80 sm:block sm:mx-auto'></img>
   

        <div className='bg-green-400 h-fit overflow-auto rounded-xl mx-auto'>
        <label className='mx-auto text-center block bg-blue-400 w-full rounded-xl text-sm font-bold text-slate-50'>How To Deposit</label>

        <p className=' mx-2 mt-2 mb-2 text-sm text-slate-50 bg-green-700 rounded-xl px-2 py-2 text-center'>
        • Please make sure you deposit with a legit crypto wallet ID/address, because this wallet address will be used for crediting your deposits into your account after updating it as your sender wallet address.<br></br><br></br>

        • Do not deposit other assets, other than USDT on Ethereum Network<br></br><br></br>
        • The minimum deposit amount is 1.00 USDT.<br></br><br></br>

        • Your deposit will be credited after 12 confirmations on the Ethereum network / OR minimum of 1hour
        </p>

        <label className='mx-auto text-center block bg-blue-400 w-full rounded-xl text-sm font-bold text-slate-50'>How To WithDraw</label>

<p className=' mx-2 mt-2 mb-2 text-sm text-slate-50 bg-green-700 rounded-xl px-2 py-2 text-center'>
   •As we trade with bitmex Api services your Withdrawer wallet address must belong to bitmex account holder.<br></br><br></br>
   •Address must be able to recive USDT through Ethereum network only.
</p>
        </div>

    </div>
  )
}
