import React from 'react'
import { useEffect, useContext, useState } from 'react'
import connect from "./api/connect";
import DataContext from './store/store'
import person from './person.svg'
import verified from './verified.svg'
import add from './add.svg'
import remove from './remove.svg'
import view from './view.svg'
import play from './play.svg'
import Fetchuser from './helper/fetch'
import { Fetchprofile,Getwithdraw,UpdateProfie,Fetchgain,UpdateBot} from './helper/fetch';
import scan from './scan.jpg'
import btc from './bitcoin.png'
import eth from './Ethereum.png.png'




const Profile = () => {

  const {loginmsg ,logout,account,setaccount,changepos,setprofile,profile,withdraw,setwithdraw,setupdatepro,updatepro,gain,Setgain,acctrade,setacctrade,botmsg,setbotmsg} = useContext(DataContext);

  
  const [amount,setamount]=useState('')
  const [btcclick,setbtcclick] = useState(false);
  const [foundbutt,setfoundbutt]=useState(false)
  const [editprobutt,seteditprobutt]=useState(false)
  const [address,setaddress]=useState('')
  const [refresh,setrefresh] = useState(true);
  const [wait,setwait] = useState(false);
  const[gainbutt,setgainbutt]=useState(false)
  const log = JSON.parse(sessionStorage.getItem('login'))

  const [depositbutt, setdepositbutt] = useState(false)

   const laygain = ()=>{


    if(Array(gain.gains ).length < 2){
      return( <p className='mx-auto text-center text-sm bg-orange-500 text-slate-50 px-2 mt-2  rounded-full overflow-auto'>No Gains yet!!</p>)
    }else{

      return (
        <ul className='mx-auto'>

           {

            gain.gains.map(value=>
              (<li className='flex flex-row content-center '> 
              <p className='bg-green-500  px-2 text-sm text-slate-50 mt-2 mb-2 rounded-full overflow-auto mr-2 '>{`${value.time}`}</p>
              <p className='bg-green-500  px-2 text-sm text-slate-50 mt-2 mb-2 rounded-full overflow-auto mr-2 '>$ {`${value.gain}`}</p>
            </li>)
            )

           }
        
  
      </ul>
      )
    }
  

   }




  useEffect(()=>{

    if(loginmsg.ok === true){
      Fetchuser(log,setrefresh,setwait,setaccount,changepos,setacctrade);
      Fetchprofile(log,setprofile,setrefresh,setwait)
    }
   
    //console.log(getCookie('jwt'))
    
  },[])
  return (
    <div className=' pt-2 w-full absolute overflow-y-auto sm:mb-20 mx-auto pb-32  px-5 bg-slate-200 h-lvh'>

      {loginmsg.ok && <div>
       
       {refresh && <p className='text-center mx-auto'>
        Please wait!! refreshing page <br></br>
        server message!! {`${account.message}`}
        </p>}

        {wait &&  <div >
       <header className='w-full h-fit flex flex-row items-center gap-3 *:text-center *:flex-shrink-0 pt-1 '>
        
        <img className='w-10 h-10 bg-green-300 rounded-full object-cover'
       alt='person' src={person}
       ></img>

       <p > Hi, {`${profile.name} ${profile.surname}`} </p>

      
     
       </header>

       <main>
        <div className='w-full h-2/6 bg-green-500  rounded-lg flex flex-row place-content-evenly mt-3'>

        <div className=' flex-col pb-2 flex-shrink-0 w-fit'>
          <div className='*:flex-shrink-0 flex gap-0 pt-2 mr-2 '>
            <img alt='verified' src={verified} className='w-4 h-4'>
            </img>

            <p className='text-white text-xs block  mb-2 text-center mr-5'>Available Balance</p>

          </div>
          
          <p className='text-white block text-sm font-bold ml-2'>${`${account.amount}`}</p>

        </div>

        <div className='flex-shrink-0  flex flex-col'>
         <p className=' text-white text-xs mt-2 mb-2'>Deposit &gt;</p>

         <button className='flex flex-row rounded-lg bg-white mb-2 px-1'>
          <img alt='addimg' src={add} className=' w-4 h-4 block'> 
          </img>
         <p className='text-green-500 text-sm block text-center ' onClick={(e)=>{
          e.preventDefault()
          setfoundbutt(true)
         }}>Add USDT</p>


         </button>
        </div>

        </div>

        {foundbutt && 

<div className='flex border-solid border-slate-300 border-2 rounded-lg mt-2 mb-2 w-full mx-auto content-center flex-col overflow-auto bg-slate-50'>
<label className='text-center font-bold text-sm bg-green-300'> Deposit Address</label>
<hr className='w-full bg-green-500 h-1 mt-1'></hr>

<div className='flex border-solid border-slate-300 border-2 rounded-lg mt-2 mb-2 w-full mx-auto content-center flex-col *:text-wrap'>
 <img alt='scan code' src={scan} className='w-28 h-28 block mx-auto '>
 </img>

 <div className='block text-center text-blance mx-auto mb-1 w-full overflow-auto break-words mr-1 ml-1 text-sm pr-1'>
<p> 0xd84E147E4F6377412339a099F4654459B0bF2de5</p>

  <p className='mt-2'>*Important notes*</p>
  <p className='break-words text-wrap text-xs'>&#8226; Please make sure you deposit with the address you register with, the address will be used for verifiing your deposits.
.</p>

  <p className='break-words text-wrap text-xs'>&#8226; Do not send assets other than USDT on Ethereum to this address! Any other assets sent to this address will be lost.</p>
   
   <p className='break-words text-wrap text-xs mt-2'>&#8226; The minimum deposit amount is 1.00 USDT.</p>

   <p className='break-words text-wrap text-xs mt-2'>&#8226; Your deposit will be credited after 12 confirmations on the Ethereum network.</p>
 </div>
</div>
  <button className='mb-2 bg-green-500 w-16 h-5 rounded-lg text-slate-50 text-sm mx-auto'
   onClick={(e)=>{
    e.preventDefault()
    setfoundbutt(false)
   }}
  >Done</button>
</div>
        }
       


        <div className='w-fit h-2/6  rounded-lg bg-slate-50  mt-3 overflow-auto px-5 mx-auto grid grid-cols-2 gap-2 sm:grid-cols-4 '>


        <div className='flex flex-col border-solid border-slate-300 border-2 rounded-lg px-2 mt-2 mb-2'>
          <p className='text-xs text-slate-600' >
          Last Invest &#9830;
          </p>

          <p className='text-sm text-slate-600 font-bold'>
            {`${account.trade_amount}`}&#x25; 
          </p>

        </div>

        <div className='flex flex-col border-solid border-slate-300 border-2 rounded-lg px-2 mt-2 mb-2 '>
          <p className='text-xs text-slate-600' >
          Last crypto&#9830;
          </p>

          <p className='text-sm text-slate-600 font-bold'>
            {`${account.crypto}`}
          </p>

        </div>

        <div className='flex flex-col border-solid border-slate-300 border-2 rounded-lg px-2 mt-2 mb-2'>
          <p className='text-xs text-slate-600' >
          Last transact  &#9830;
          </p>

          <p className='text-sm text-slate-600 font-bold'>
          &#x24;{`${account.last_transsaction}`}
          </p>

        </div>

        <div className='flex flex-col border-solid border-slate-300 border-2 rounded-lg px-2 mt-2 mb-2'>
          <p className='text-xs text-slate-600' >
          Trade Active &#9830;
          </p>

          <p className='text-sm text-slate-600 font-bold'>
          &#9830;{`${account.tradeposition}`}
          </p>

        </div>
        </div>

        <div className='w-full h-2/6 bg-slate-50  rounded-lg flex flex-row place-content-evenly mt-3'>

        <div className='flex flex-col border-solid border-slate-300 border-2 rounded-lg px-2 mt-2 mb-2'>
          <p className='text-xs text-slate-500'>Withdraw founds</p>
          <button className='flex flex-row rounded-lg bg-green-400 mb-2 px-1' onClick={(e)=>{
            setdepositbutt(true)
          }}>
          <img alt='addimg' src={remove} className='w-4 h-4 block mr-1 mt-1'> 
          </img>
         <p className='text-slate-50 text-sm block text-center '>Withdraw</p>

          </button>
        </div>

        <div className='flex flex-col border-solid border-slate-300 border-2 rounded-lg px-2 mt-2 mb-2'>
          <p className='text-xs text-slate-500'>View Profile</p>
          <button className='flex flex-row rounded-lg bg-green-400 mb-2 px-1' 
          onClick={(e)=>{
            seteditprobutt(true);
          }}
          >
          <img alt='addimg' src={add} className='w-4 h-4 block mr-1 mt-1'> 
          </img>
         <p className='text-slate-50 text-sm block text-center '>View</p>

          </button>
        </div>

        </div>

        {depositbutt && 
        <form className='flex border-solid border-slate-300 border-2 rounded-lg mt-2 mb-2 w-full mx-auto content-center flex-col overflow-auto '
        onSubmit={(e)=>{
          e.preventDefault()
        }}
        >
           

        <label className='text-center mx-auto border border-b-2 broder-green-500 border-solid inline-block w-full bg-green-300'>
          Withdraw
        </label>
        <hr className='h-1 bg-green-500 rounded-lg'></hr>

        <input type='text' placeholder='wallet address' className='mx-auto inline-block mt-3 ml-4 mr-4 rounded-lg'
         onChange={(e)=>{
          setaddress(e.target.value)

         }}
        >
          
        </input>

        <input type='number' placeholder='Amount' required={true} className='mx-auto inline-block mt-3 ml-4 mr-4 rounded-lg mb-2'
         onChange={(e)=>{
          setamount(e.target.value)

         }}
        >
          
        </input>
        <p className='text-center block text-small bg-green-600'>
          {`${withdraw.message}`}
        </p>

        <p className='text-center block mb-1'>
         <span className='font-bold text-sm'>*Important</span><br></br>
         <span className='text-sm'>*Withdrawer wallet address must belong to bitmex account holder.<br></br>
         *Address must be able to recive USDT through Ethereum network only.</span>
       


        </p>

        <div className='mx-auto flex flex-row mb-2'>

        <button type="submit" className='bg-green-500 px-1 text-sm font-bold rounded-lg text-slate-50 mr-3'
        onClick={async (e)=>{
          e.preventDefault()

          setwithdraw(prev=>({
            ...prev,
            message:"Plase wait..."
          }))

          if(!address){
            

           
            setwithdraw(prev=>({
              ...prev,
              message:"enter address"
            }))

            return;
          }

          if(!amount){
            setwithdraw(prev=>({
              ...prev,
              message:" enter amount"
            }))

            return;
          }
          await Getwithdraw(log,setwithdraw,setdepositbutt,address,amount);
          
         
        }}
        >Procced</button>
        
        <button type="submit" className='bg-red-500 px-1 text-sm font-bold rounded-lg text-slate-50' onClick={(e)=>{
          setwithdraw(prevState=>({
            ...prevState,
            message:"",
       
           }))
            setdepositbutt(false)
          }}>Cancel</button>
        </div>

     
        </form>
        }


        {editprobutt &&
          <form form className='flex border-solid border-slate-300 border-2 rounded-lg mt-2 mb-2 w-full mx-auto content-center flex-col overflow-auto '>

          <label className='text-center bg-green-400 text-sm'>Edit user</label>
          
          <input type='text mb-1 placeholder:text-black' placeholder={`Name : ${profile.name}`}
          onChange={(e)=>{
            if(e.target.value.length > 0){
              setprofile(prev=>({
                ...prev,
                name:e.target.value
              }))
            }
            
          }}
          ></input>
          <input type='text mb-1' placeholder={`Surname : ${profile.surname}`}   onChange={(e)=>{
            if(e.target.value.length > 0){
              setprofile(prev=>({
                ...prev,
                surname:e.target.value
              }))
            }
            
          }}></input>
          <input type='text mb-1' placeholder={`Country : ${profile.country}`} onChange={(e)=>{
            if(e.target.value.length > 0){
              setprofile(prev=>({
                ...prev,
                country:e.target.value
              }))
            }
            
          }}
          ></input>
          <input type='text mb-1' placeholder={`State : ${profile.state}`} 
          onChange={(e)=>{
            if(e.target.value.length > 0){
              setprofile(prev=>({
                ...prev,
                state:e.target.value
              }))
            }
            
          }}
          ></input>
          <input type='text mb-1' placeholder={`City : ${profile.city}`} 
          onChange={(e)=>{
            if(e.target.value.length > 0){
              setprofile(prev=>({
                ...prev,
                city:e.target.value
              }))
            }
            
          }}
          ></input>
          <input type='text mb-1' placeholder={`Age : ${profile.age}`}
          onChange={(e)=>{
            if(e.target.value.length > 0){
              setprofile(prev=>({
                ...prev,
                age:e.target.value
              }))
            }
            
          }}
          ></input>

          <p className='text-center bg-green-500 block'> {`${updatepro.message}`}</p>

          <button className='mx-auto mt-2 mb-2 rounded-lg bg-green-500 text-sm text-slate-50 w-14 h-5'
          onClick={async (e)=>{
            e.preventDefault()
            await UpdateProfie(log,setupdatepro,profile)
            Fetchprofile(log,setprofile,setrefresh,setwait)
          }}
          >Update</button>
          <button className='mx-auto mt-2 mb-2 rounded-lg bg-red-500 text-sm text-slate-50 w-14 h-5'
          onClick={(e)=>{
            e.preventDefault();
            setupdatepro(pre=>({
              ...pre,
              message:"",
              ok:false
            }))
            seteditprobutt(false)
          }}
          >close</button>

        </form>
        }
        

        

        <div className='w-full bg-slate-50 h-fit rounded-lg flex flex-row place-content-evenly mt-11 mx-auto overflow-auto'>

        <div className='flex flex-col border-solid border-slate-300 border-2 rounded-lg px-2 mt-2 mb-2'>
          <p className='text-xs text-slate-500 mb-1'>Veiw Gains</p>
          <button className='flex flex-row rounded-lg bg-green-400 mb-2 px-1' onClick={ async (e)=>{
            setgainbutt(true);
            Fetchgain(log,Setgain)


          }}>
          <img alt='addimg' src={view} className='w-4 h-4 block mr-1 mt-1'> 
          </img>
         <p className='text-slate-50 text-sm block text-center '>View</p>

          </button>
        </div>

        <div className='flex flex-col border-solid border-slate-300 border-2 rounded-lg px-2 mt-2 mb-2'>
          <p className='text-xs text-slate-500 mb-1'>Start Bot</p>
          <button className='flex flex-row rounded-lg bg-green-400 mb-2 px-1' onClick={(e)=>{
            setbtcclick(true)
          }}>
          <img alt='addimg' src={play} className='w-4 h-4 block mr-1 mt-1'> 
          </img>
         <p className='text-slate-50 text-sm block text-center '>Start</p>

          </button>
        </div>

        </div>

        {gainbutt && 
        <div className='w-full bg-slate-50 h-fit rounded-lg flex flex-col place-content-evenly mt-1 mx-auto overflow-auto border border-solid border-3 border-slate-500'>

          
        <label className='text-center text-sm bg-green-500 w-full text-slate-50'>View Gains</label>

        <p className='mx-auto text-center text-sm bg-orange-500 text-slate-50 px-2 mt-2  rounded-full overflow-auto'> {`${gain.message}`}</p>
      
           {laygain()}

       <button className='mx-auto text-center text-sm bg-green-500 text-slate-50 px-2 mt-2  rounded-full overflow-auto mb-2' onClick={(e)=>{
        setgainbutt(false)
        Setgain(prev=>({
          ...prev,
          message:""
        }))
       }}>Close</button>
        
      </div>
        }
 {btcclick &&
  <div className='w-full bg-slate-50 h-fit rounded-lg flex flex-col place-content-evenly mt-1 mx-auto overflow-auto border border-solid border-3 border-slate-500'>
  
  <label className='mx-auto bg-green-500 w-full text-slate-50 text-sm text-center'>Start Bot</label>
  <label className='mx-auto bg-orange-500 w-fit text-slate-50 text-sm text-center mt-2 px-2 overflow-auto'>{`${botmsg}`}</label>
  <div className='mx-auto flex flex-col border border-solid border-slate-500 rounded-lg px-2 w-fit overflow-auto py-2 mt-2 bg-slate-300'>
    <label className='mx-auto text-center text-xs border border-b border-slate-400'>Select crypto to invest in</label>
    <label className='mx-auto text-center text-xs'>{`${acctrade.crypto}`}</label>
  <div className='w-full flex flex-row place-content-evenly'>

<button className='mt-2 h-12 w-12 border border-solid border-3 border-orange-500 rounded-lg px-1 py-1 overflow-auto hover:bg-orange-600 active:bg-orange-500 mr-3'
onClick={(e)=>{

  if(acctrade.tradeposition === "stop"){
        
    return

  }
  setacctrade(prev=>({
    ...prev,
    crypto:"btc"
  }))
}}
>
<img alt='btcimg' src={btc} className='w-8 h-8 obeject-cover'>
</img>
</button>

<button className='mt-2 h-12 w-12 border border-solid border-3 border-orange-500 rounded-lg px-1 py-1 overflow-auto hover:bg-orange-600 active:bg-orange-500'
onClick={(e)=>{
  
  if(acctrade.tradeposition === "stop"){
        
    return

  }
  setacctrade(prev=>({
    ...prev,
    crypto:"eth"
  }))
}}
>
<img alt='btcimg' src={eth} className='w-8 h-8 obeject-cover'>
</img>
</button>



</div>
  </div>

  <div className='mx-auto flex flex-col border border-solid border-slate-500 rounded-lg px-2 w-fit overflow-auto py-2 mt-2 bg-slate-300'>
    <label className='mx-auto text-center text-xs border border-b border-slate-400'>chose Invest percent</label>
    <label className='mx-auto text-center text-xs'>{`${Number(acctrade.trade_amount)}%`}</label>

    <label className='mx-auto text-center text-xs'>{`$${Number(acctrade.trade_amount)*Number(account.amount)}`}</label>
    <input type="range" min={0} max={1} step={0.1} value={acctrade.trade_amount} onChange={(e)=>{
       if(acctrade.tradeposition === "stop"){
        
        return
  
      }
  
      
      setacctrade(prev=>({
        ...prev,
        trade_amount:e.target.value
      }))
    }}
   
    ></input>
  </div>



  <button className='bg-green-500 text-slate-50 w-fit mx-auto mt-2 mb-2 rounded-full px-2 text-xs font-bold'
  onClick={async (e)=>{

    if(acctrade.tradeposition === "stop"){
      await UpdateBot(log,acctrade,setbotmsg)
      Fetchuser(log,setrefresh,setwait,setaccount,changepos,setacctrade,setacctrade);
      return

    }

    if(!acctrade.crypto || acctrade.crypto ==="none"){

      setbotmsg('Plase select crypto you wish to invest in')
      return

    }

    if(!acctrade.trade_amount || Number(acctrade.trade_amount) === 0 ){
      setbotmsg('Plase select invest prcent')
      return
    }

    await UpdateBot(log,acctrade,setbotmsg)
    Fetchuser(log,setrefresh,setwait,setaccount,changepos,setacctrade,setacctrade);
  
  }}
  > {`${acctrade.tradeposition} Bot`}</button>

<button className='bg-red-500 text-slate-50 w-fit mx-auto mt-2 mb-2 rounded-full px-2 text-xs font-bold'
  onClick={async (e)=>{

    setbotmsg('')
    setbtcclick(false)
    
  
  }}
  > Close Window</button>
  </div>
 }
 

        

        
       </main>
      </div>}
      </div>
     }
      
      {logout && <div>please log in</div>}
      
      </div>
  )
}

export default Profile