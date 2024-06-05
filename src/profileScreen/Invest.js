import React from 'react'
import btc from '../bitcoin.png'
import eth from '../Ethereum.png.png'
import verified from '../verifiedimg.svg'
import Fetchaccount, { Data,UpdateBot} from '../helper/fetch'
import DataContext from '../store/store'
import { useContext, useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const Invest = () => {

  const {account,botmsg,setbotmsg,acctrade,setacctrade,setaccount,changepos} = useContext(DataContext);
    const [colorb,setcolorb] = useState(``)
    const [colore,setcolore] = useState('')
    const [percent,setpercent] = useState(0)
    const [btcprice,setbtcprice]= useState('Fetching price')
    const [ethprice,setethprice]= useState('Fetching price')
    const [crypto,setcrypto] = useState('btc');
  //  const [percent,setaddress1] = useState('');

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    
      // These options are needed to round to whole numbers if that's what you want.
      minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    const notify1 = (message)=>{
      toast(message)
     }

    const Fetchprice = async()=>{
      
      let data = await Data()

      if(data !== 0){
        setbtcprice(`${data['btc'].data.price}`)
        setethprice(`${data.eth.data.price}`)
        
      }else{
        setbtcprice(`failed reload`)
        setethprice(`failed reload`)
      }
       
      
      
    }

    useEffect(()=>{
      Fetchprice()

    },[]);

    useEffect(()=>{

      if(botmsg.ok === true){
        notify1(botmsg.message)
        setbotmsg(prev=>({
          ...prev,
          message:'',
          ok:false
         }))
      }
    
     
     },[botmsg])
   


  return (
    <section className='w-full mx-auto  px-2 '>
        <p className='text-center'>Are you ready to earn Like a <span className='font-bold'>Boss?</span><br></br>
        Just Invest!
        </p>

        <div className='w-full h-20 bg-blue-700 rounded-xl shadow-2xl mt-2 flex flex-col'>
        <div className='mx-auto flex flex-row mt-5'>
          <img alt='safeimg' src={verified} className='w-4 '>
          </img>

          <p className='text-slate-50 text-sm'>Avalable Balance</p>
        
        </div>
        <p className='text-center text-slate-50 font-bold'>&#x24;{`${account.amount}`}</p>
        </div>


        <div className='mx-auto w-full bg-lime-600 rounded-3xl flex flex-col mt-7'>

        <div className='bg-slate-100 rounded-3xl flex flex-row w-fit mx-auto'>

         <div className='rounded-3xl flex flex-row w-fit ml-2 px-2 py-2'>
            <img alt='btcImg' src={btc} className='w-7 object-cover'>
            </img>

            <p className='font-bold'>Bitcoin</p>

         </div>

         <p className='text-center my-auto px-2 py-2 text-sm text-blue-800'>Price</p>

         <p className='text-center my-auto px-2 py-2 text-sm text-green-600'>{`${ formatter.format(btcprice)}`}</p>

        </div>

        </div>

        <div className='mx-auto w-full bg-lime-600 rounded-3xl flex flex-col mt-3'>

<div className='bg-slate-100 rounded-3xl flex flex-row w-fit mx-auto'>

 <div className='rounded-3xl flex flex-row w-fit ml-2 px-2 py-2'>
    <img alt='btcImg' src={eth} className='w-5 object-cover'>
    </img>

    <p className='font-bold'>Ethereum</p>

 </div>

 <p className='text-center my-auto px-2 py-2 text-sm text-blue-800'>Price</p>

 <p className='text-center my-auto px-2 py-2 text-sm text-green-600'>{`${ formatter.format(ethprice)}`}</p>

</div>

        </div>

        <div className='mx-auto w-full rounded-3xl flex flex-col mt-5 border border-solid border-lime-600 bg-slate-400 mb-11'>

        <div className='rounded-3xl flex flex-col w-full mx-auto overflow-auto'>
           
        <p className='font-bold text-sm text-center text-black shadow-2xl border mt-2 bg-blue-500'>Select Crypto you Wish to Invest.</p>
        <p className='font-bold text-sm text-center text-black shadow-2xl border mt-2 bg-blue-500'>{`${botmsg.message}`}</p>
            <p className='font-bold text-sm text-center text-lime-900 shadow-2xl mt-4'>{`${crypto}`}</p>
            
            <ToastContainer position='top-center'  theme='dark'/>
              
            <div className='flex flex-row mx-auto mt-2'>

                <button className={`w-11 h-11 rounded-full  mr-8`}onClick={(e)=>{
               setcolorb('#FF0000')
               setcolore('')
               setcrypto('btc');
       
             }}style={{ backgroundColor: `${colorb}` }}>
                <img alt='btcImg' src={btc} className='w-7 object-cover mx-auto '>
                </img>
                </button>

                <button className={`w-11 h-11 rounded-full  mr-8`}onClick={(e)=>{
               setcolorb('')
               setcolore('#FF0000')
               setcrypto('eth')
       
                }}style={{ backgroundColor: `${colore}` }}>
                <img alt='btcImg' src={eth} className='w-5 object-cover mx-auto'>
                </img>
                </button>

            </div>
            <p className='font-bold text-sm text-center text-black shadow-2xl border mt-2 bg-blue-500'>Select Investment percent.</p>
            
            <p className='font-bold text-sm text-center text-black shadow-2xl mt-4'>${`${Number(percent)*Number(account.amount)}`}</p>
            <p className='font-bold text-sm text-center text-black shadow-2xl'>{`${percent}`}&#x25;</p>

            <input type='range' step={0.1}  max={1} min={0} className='mt-3 mb-2 mr-2 ml-2 bg-blue-600'
            onInput={(e)=>{
              setpercent(e.currentTarget.value)
            }}></input>

            <button className='text-center bg-blue-700 w-fit h-10 mx-auto px-5 mb-2 rounded-3xl shadow-2xl mt-7'
            onClick={async(e)=>{
              if(!crypto){
                notify1('Select crypto you wish to invest on')
                return;
              
              }
            
              if(!percent){
                notify1('Select percentage you wish to invest')
                return;
              
              }
              setacctrade(prev=>({
                ...prev,
                crypto:crypto,
                trade_amount:percent
              }))
              
            
              let log = JSON.parse(sessionStorage.getItem('login'))
             await UpdateBot(log,acctrade,setbotmsg);
             Fetchaccount(log,undefined,setaccount,changepos,setacctrade)
              
            }}
            >{`${acctrade.tradeposition} Invest`}</button>

        </div>

        </div>
    </section>
    
  )
}

export default Invest