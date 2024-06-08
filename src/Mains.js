import React from 'react'
import btc from './bitcoin.png'
 import eth from './Ethereum.png.png'
 import bot from './trading-bot.jpg'
 import howIt from './how-it-works.webp'
 import deposit from './how_dposit.webp'
 import { NavLink,useNavigate } from 'react-router-dom'
 import { useEffect } from 'react'
 import about from './aboutIMG.svg'

const Main = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    let log = JSON.parse(sessionStorage.getItem('login'))
    if(log){

       navigate('/profile')
    }
  },[])

 
  return (
    <main className='w-full overflow-auto overflow-y-auto scroll-my-8 absolute mb-11 sm:mb-32 mx-auto '>
    <section className='w-full borderb '>
    <img alt='bot' src={bot} height={1920} width={1920} className='object-cover sm:w-80 sm:h-80 sm:block sm:mx-auto w-28 block mx-auto'>
    </img>

    <h5 className='text-center font-semibold mb-1'>
      Boost profits effortlessly<br></br>
      with Our Trading Bot.
    </h5>

    <p className='text-center text-xs'>
    We provide easy to use smart Investment
    Tools,<br></br> And with our advanced investment Ai, anyone can easily Invest in<br></br> Crypto Currency.
     
    </p>

    <p className='flex flex-row'>
      <img alt='btc' src={btc} className='sm:w-20 sm:h-20 block m-auto animate-bounce w-10 h-10'>
      </img>
      <img alt='eth' src={eth} className='sm:w-20 sm:h-20 block m-auto animate-bounce w-10 h-10'>
      </img>
    </p>
    </section>

    <section className='w-full  overflow-y-auto mt-1   mx-auto sm:grid sm:grid-flow-col '>
        
     
     <div className=' mt-1  mx-auto  *:font-semibold *:text-sm overflow-auto sm:mt-11 mb-2 sm:mb-0'>
     <NavLink to={`/how`} className='place-content-evenly grid grid-flow-col'>
      <img alt='how it work' src={howIt} className='block object-cover mx-auto'>
      </img>

       <p className='text-center text-black my-auto'>
       Click here to know more about our Robot.
       </p>
       </NavLink>
       </div>
     

    
       <div className=' mt-1  mx-auto  *:font-semibold *:text-sm overflow-auto sm:mt-0'>
    <NavLink to={`/depositing`} className='place-content-evenly grid grid-flow-col'>
   
   <img alt='about' src={deposit} className='block object-cover mx-auto '>
   </img>

   <p className='text-center text-black my-auto'>
    How to deposit and withdraw fund with<br></br>
    BitMex wallet address...
   </p>
   </NavLink>
       </div>


    
    
    </section>

    <section className='w-full  overflow-auto mb-20'>
      <div className='w-full bg-yellow-500'>
        <img alt='aboutIMG' src={about} className='w-full object-cover' >
        </img>
        <p className='px-2 text-center text-sm mt-2 mb-3'> 
       <span className='font-bold'>Constantine trading AI</span>  is a cloud trading platform empowering trader to
        automate their trading on major exchanges.
        </p>

        <p className='px-2 text-center text-sm mt-2 mb-3'>
          <p className='text-center text-sm mt-2 mb-1 font-bold'> Constantine trading AI history</p>
          Constantine trading AI welcomed first customers in Fall 2018 and never has been breaking the barriers to automated trading ever since then. For the last few years, Constantine trading AI has introduced thousands of crypto owners to automated trading.

        In 2020 Constantine trading AI has expanded the markets available for automating by connecting new exchanges and brought some new advanced tools to its users. We can’t wait to share what else we are planning for you!
        </p>

      </div>

      <p className='px-2 text-center text-sm mt-2'> 
      <p className='text-center  mt-2 mb-1 font-bold'>Constantine trading AI mission</p>
      We designed Constantine trading AI with the idea at heart to make automated crypto trading accessible to everyone and provide opportunities to traders of all experience levels to make a profit in the ever-growing crypto market.

      </p>
      
    </section>

    </main>
  )
}

export default Main