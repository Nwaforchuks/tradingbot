import React, { useState } from 'react'
import person from './data/userimge.png'
import arrow from './data/arrow.svg'
import  { UpdateProfie,Fetchprofile} from '../helper/fetch'
import DataContext from '../store/store'
import { useContext, useEffect} from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Editprofile = () => {

  const {profile,setprofile,setupdatepro,updatepro} = useContext(DataContext);
 
  const [namebut,setnamebut] = useState(false)
  const [surnmaebut,setsurnamebut] = useState(false)
  const [agebut,setagebut] = useState(false)
  const [countrybut,setcountrybut] = useState(false)
  const [statebut,setstatebut] = useState(false)
  const [citybut,setcitybut] = useState(false)

  const notify1 = (message)=>{
    toast(message)
   }

   useEffect(()=>{
    if(updatepro.ok === true){
      notify1(updatepro.message)
      setupdatepro(prev=>({
        ...prev,
        ok:false,
        message:""
      }))
    }
    
   },[updatepro])

  return (
    <section className='w-full mx-auto  px-2 '>
      <p className='font-bold block'>Profile</p>
      <div className='flex flex-col mx-auto'>
        <img alt='userIMG' src={person} className='w-28 h-28 bg-blue-500 mx-auto rounded-full'>
        </img>

        <p className='text-center font-bold'>{`${profile.surname}  ${profile.name}`}</p>

      </div>
      <ToastContainer position='top-center'  theme='dark'/>

      <div className='flex flex-col mx-auto w-full bg-slate-50 rounded-xl  mt-2'>

       <div className='flex flex-row my-auto place-content-evenly'>

       <p className='text-sm font-bold'>Name</p>

        <p className='text-sm font-bold'>{`${profile.name}`}</p>

        <button className='active:bg-slate-400' onClick={(e)=>{
          setnamebut(true)
        }}>
        <img alt='arrowIMG' src={arrow} className='w-4'></img>
        </button>
       



        </div>

        {namebut && 
         <div className='w-full'>
         <input  required={true} placeholder='Enter new name' type='text' className='block mt-2 mx-auto w-full rounded-lg
          bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
           onChange={(e)=>{
           setprofile(prev=>({
            ...prev,
            name:e.target.value
           }))
            
            }}
          >
 
         </input>
         <button className='bg-blue-500 rounded-xl w-16 font-bold mx-auto mt-2'
         onClick={async(e)=>{
          notify1('updating...')
          let log = JSON.parse(sessionStorage.getItem('login'))
          await UpdateProfie(log,setupdatepro,profile)
          Fetchprofile(log,setprofile,undefined)
          setnamebut(false)
         }}
         >Update</button>
         </div>
        }

       

      


      </div>

      <div className='flex flex-col mx-auto w-full bg-slate-50 rounded-xl  mt-2'>

<div className='flex flex-row my-auto place-content-evenly'>

<p className='text-sm font-bold'>Surname</p>

 <p className='text-sm font-bold'>{`${profile.surname}`}</p>

 <button className='active:bg-slate-400'onClick={(e)=>{
          setsurnamebut(true)
        }}>
 <img alt='arrowIMG' src={arrow} className='w-4'></img>
 </button>




 </div>

 {surnmaebut && 
  <div className='w-full'>
  <input  required={true} placeholder='Enter new surname' type='text' className='block mt-2 mx-auto w-full rounded-lg
   bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
    onChange={(e)=>{
 
      setprofile(prev=>({
        ...prev,
        surname:e.target.value
       }))
     }}
   >
 
  </input>
  <button className='bg-blue-500 rounded-xl w-16 font-bold mx-auto mt-2' onClick={async(e)=>{
          notify1('updating...')
          let log = JSON.parse(sessionStorage.getItem('login'))
          await UpdateProfie(log,setupdatepro,profile)
          Fetchprofile(log,setprofile,undefined)
          setsurnamebut(false)
         }}>Update</button>
  </div>
 
}

 



</div>

<div className='flex flex-col mx-auto w-full bg-slate-50 rounded-xl  mt-2'>

<div className='flex flex-row my-auto place-content-evenly'>

<p className='text-sm font-bold'>State</p>

 <p className='text-sm font-bold'>{`${profile.state}`}</p>

 <button className='active:bg-slate-400'onClick={(e)=>{
          setstatebut(true)
        }}>
 <img alt='arrowIMG' src={arrow} className='w-4'></img>
 </button>




 </div>

 {statebut && 
 <div className='w-full'>
 <input  required={true} placeholder='Enter new State' type='text' className='block mt-2 mx-auto w-full rounded-lg
  bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
   onChange={(e)=>{

    setprofile(prev=>({
      ...prev,
      state:e.target.value
     }))
    }}
  >

 </input>
 <button className='bg-blue-500 rounded-xl w-16 font-bold mx-auto mt-2'
 onClick={async(e)=>{
  notify1('updating...')
  let log = JSON.parse(sessionStorage.getItem('login'))
  await UpdateProfie(log,setupdatepro,profile)
  Fetchprofile(log,setprofile,undefined)
  setstatebut(false)
 }}
 >Update</button>
 </div>
 }

 




</div>

<div className='flex flex-col mx-auto w-full bg-slate-50 rounded-xl  mt-2'>

<div className='flex flex-row my-auto place-content-evenly'>

<p className='text-sm font-bold'>Country</p>

 <p className='text-sm font-bold'>{`${profile.country}`}</p>

 <button className='active:bg-slate-400'onClick={(e)=>{
          setcountrybut(true)
        }}>
 <img alt='arrowIMG' src={arrow} className='w-4'></img>
 </button>




 </div>

 {countrybut&&
 <div className='w-full'>
 <input  required={true} placeholder='Enter new Country' type='text' className='block mt-2 mx-auto w-full rounded-lg
  bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
   onChange={(e)=>{

    setprofile(prev=>({
      ...prev,
      country:e.target.value
     }))
    }}
  >

 </input>
 <button className='bg-blue-500 rounded-xl w-16 font-bold mx-auto mt-2'
  onClick={async(e)=>{
    notify1('updating...')
    let log = JSON.parse(sessionStorage.getItem('login'))
    await UpdateProfie(log,setupdatepro,profile)
    Fetchprofile(log,setprofile,undefined)
    setcountrybut(false)
   }}
 >Update</button>
 </div>
 }

 




</div>

<div className='flex flex-col mx-auto w-full bg-slate-50 rounded-xl  mt-2'>

<div className='flex flex-row my-auto place-content-evenly'>
<p className='text-sm font-bold'>City</p>
 <p className='text-sm font-bold'>{`${profile.city}`}</p>

 <button className='active:bg-slate-400' onClick={(e)=>{
          setcitybut(true)
        }}>
 <img alt='arrowIMG' src={arrow} className='w-4'></img>
 </button>




 </div>

 {citybut&&
 <div className='w-full'>
 <input  required={true} placeholder='Enter new city' type='text' className='block mt-2 mx-auto w-full rounded-lg
  bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
   onChange={(e)=>{

    setprofile(prev=>({
      ...prev,
      city:e.target.value
     }))
    }}
  >

 </input>
 <button className='bg-blue-500 rounded-xl w-16 font-bold mx-auto mt-2'
 onClick={async(e)=>{
  notify1('updating...')
  let log = JSON.parse(sessionStorage.getItem('login'))
  await UpdateProfie(log,setupdatepro,profile)
  Fetchprofile(log,setprofile,undefined)
  setcitybut(false)
 }}
 >Update</button>
 </div>
 }

 




</div>

     

      </section>
  )
}

export default Editprofile