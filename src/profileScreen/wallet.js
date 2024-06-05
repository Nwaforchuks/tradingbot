import scan from '../scan.jpg'
import usdt from './data/tetherIMG.png'
import Fetchaccount, { UpdateAddress,Getwithdraw} from '../helper/fetch'
import CopySnippet from 'react-copy-snippet'
import DataContext from '../store/store'
import { useContext, useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Wallet =({log})=> {

  const {SetnetMessage,netMessage,withdraw,setwithdraw,setaccount,changepos,setacctrade} = useContext(DataContext);
   //const value = '0xd84E147E4F6377412339a099F4654459B0bF2de5'
   const [address,setaddress] = useState('');
   const [address1,setaddress1] = useState('');
   const [amount,setamount] = useState('');

   const notify1 = (message)=>{
    toast(message)
   }

   useEffect(()=>{

    if(netMessage.Success == true){
      notify1(netMessage.Message)

      SetnetMessage(prev=>(
        {
          ...prev,
          Message:'',
          Success:false
  
        }
      ))
     
    }

    if(setwithdraw.ok == true){
      notify1(netMessage.Message)

      setwithdraw(prev=>(
        {
          ...prev,
          message:'',
          ok:false
  
        }
      ))
     
    }
   },[netMessage,withdraw])

  return (
    <section className='w-full mx-auto  px-2 '>
      <div className='bg-blue-300 w-full flex flex-col border border-solid border-white rounded-3xl shadow-2xl mx-auto mt-3'>
      <div className='flex flex-row overflow-auto mx-auto'>
        <img alt='btcIMG' src={usdt} className='w-7 object-cover'></img>
       <p className='font-bold'>USD tether ID</p> 
      </div>
      
      
      <img alt='btcboldcode' src={scan} className='object-cover w-36 mx-auto mt-2'></img>
      <p className='text-center break-all mr-1 ml-1'>0xd84E147E4F6377412339a099F4654459B0bF2de5</p>


      <p className='text-sm text-slate-50 flex flex-row mx-auto border border-solid rounded-2xl overflow-auto px-2 py-2 bg-blue-900 mb-1 active:bg-blue-950 shadow-2xl'>
        
        <CopySnippet text='0xd84E147E4F6377412339a099F4654459B0bF2de5'></CopySnippet>
      </p>
      
      
      </div>

     

      <div className='bg-blue-300 w-full flex flex-col border border-solid border-white rounded-3xl shadow-2xl mx-auto mt-3 px-2 overflow-auto'>

        <p className='text-center mb-3 font-bold text-sm'>Please Confirm Sender wallet Address: </p>
            <ToastContainer position='top-center'  theme='dark'/>
            <p className='text-center font-bold'>{`${netMessage.Message}`}</p>
        <input  required={true} placeholder='Sender Wallet Address' type='text' className='block mt-2 mx-auto w-full rounded-lg
             bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
             onChange={(e)=>{
              
                setaddress(e.target.value);
            }}
             >
        
       </input>

       <button className='bg-blue-600 mt-2 mb-2 rounded-3xl w-fit mx-auto px-2 border border-white border-solid shadow-2xl active:bg-blue-900'
       onClick={async(e)=>{

        if(!address){
          notify1('Enter Sender Wallet ID')
          return;
        
        }
        SetnetMessage(prev=>(
          {
            ...prev,
            Message:'Plase Wait Updating...'
    
          }
        ))
    
      
        let log = JSON.parse(sessionStorage.getItem('login'))
        await UpdateAddress(log,address,SetnetMessage)
        //notify1(netMessage.Message)
       
      
       }}
       >
        
        <p className='font-bold text-sm'>
        Update Deposit
        </p>
        </button>

    
      </div>

<div className='bg-blue-300 w-full flex flex-col border border-solid border-white rounded-3xl shadow-2xl mx-auto mt-3 px-2 overflow-auto mb-16'>

  <p className='text-center mb-3 font-bold text-sm'>Withdraw Funds </p>
  <p className='text-center mb-3 font-bold text-sm'>Must be BitMex USDT Address!! </p>
  <p className='text-center mb-1 font-bold text-sm'>{`${withdraw.message}`}</p>
  <input  required={true} placeholder='Wallet Address' type='text' className='block mt-2 mx-auto w-full rounded-lg
     bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
     onChange={(e)=>{
      
        setaddress1(e.target.value)
    }}
     >

</input>

<input  required={true} placeholder='Amount' type='number' className='block mt-2 mx-auto w-full rounded-lg
     bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
     onChange={(e)=>{
      
       setamount(e.target.value)
    }}
     >

</input>

<button className='bg-blue-600 mt-2 mb-2 rounded-3xl w-fit mx-auto px-2 border border-white border-solid shadow-2xl active:bg-blue-900'
onClick={async(e)=>{
  if(!address1){
    notify1('Enter Reciver Wallet ID')
    return;
  
  }

  if(!amount){
    notify1('Enter Amount')
    return;
  
  }
  

  let log = JSON.parse(sessionStorage.getItem('login'))
  await Getwithdraw(log,setwithdraw,address1,amount);
  await Fetchaccount(log,undefined,setaccount,changepos,setacctrade)
  
}}
>

<p className='font-bold text-sm'>
 Withdraw
</p>
</button>


</div>



    </section> 
  )
}

export default Wallet