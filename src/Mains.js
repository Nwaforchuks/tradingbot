import React from 'react'
import btc from './bitcoin.png'
 import eth from './Ethereum.png.png'
 import bot from './trading-bot.jpg'
 import howIt from './how-it-works.webp'
 import deposit from './how_dposit.webp'
 import { NavLink,useNavigate } from 'react-router-dom'
 import { useEffect } from 'react'

const Main = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    let log = JSON.parse(sessionStorage.getItem('login'))
    if(log){

       navigate('/profile')
    }
  },[])

 
  return (
    <main className='w-full pt-9 overflow-auto overflow-y-auto scroll-my-8 absolute mb-11 sm:mb-32 mx-auto '>
    <section className='w-full border '>
    <img alt='bot' src={bot} height={1920} width={1920} className='object-cover sm:w-80 sm:h-80 sm:block sm:mx-auto'>
    </img>

    <h5 className='text-center font-semibold mb-1'>
      Boost profits effortlessly<br></br>
      with Our Trading Bot.
    </h5>

    <p className='text-center text-xs'>
      We provide easy-to-use smart trading<br></br>
      tools and trading bots so that anyone  can<br></br>
      easily invest in crypto.
    </p>

    <p className='flex flex-row'>
      <img alt='btc' src={btc} className='sm:w-20 sm:h-20 block m-auto animate-bounce w-10 h-10'>
      </img>
      <img alt='eth' src={eth} className='sm:w-20 sm:h-20 block m-auto animate-bounce w-10 h-10'>
      </img>
    </p>
    </section>

    <section className='w-full  overflow-y-auto mt-1 px-7  mb-20  mx-auto sm:flex sm:flex-row sm:pt-6  '>
        
     
     <figure className='border-solid rounded-xl mt-1 border-blue-400 border-2 mx-auto bg-green-300 *:font-bold overflow-auto'>
     <NavLink to={`/how`}>
      <img alt='how it work' src={howIt} className='block object-cover w-fit mx-auto sm:w-28 sm:h-28'>
      </img>

       <figcaption className='text-center text-black'>
       How to use...
       </figcaption>
       </NavLink>
       </figure>
     

    
    <figure className=' mx-auto rounded-xl mt-1 border-solid border-2 border-blue-400 bg-green-300 *:font-bold overflow-auto'>
    <NavLink to={`/depositing`}>
   
   <img alt='about' src={deposit} className='block object-cover sm:h-28 mx-auto sm:w-full sm:mb-5 '>
   </img>

   <figcaption className='text-center text-black'>
    How to deposit and withdraw fund with<br></br>
    BitMex wallet address...
   </figcaption>
   </NavLink>
   </figure>


    
    
    </section>

    </main>
  )
}

export default Main