import React from 'react'
import { useEffect, useContext, useState } from 'react'
import connect from "./api/connect";
import DataContext from './store/store'
import person from './person.svg'
import add from './add.svg'
import remove from './remove.svg'
import view from './view.svg'
import play from './play.svg'
import Fetchuser from './helper/fetch'
import Fetchaccount, { Fetchprofile,Getwithdraw,UpdateProfie,UpdateBot} from './helper/fetch';
import btc from './bitcoin.png'
import eth from './Ethereum.png.png'
import homeimg from './homeimg.svg'
import walletimg from './wallet1.svg'
import candleimg from './candle1.svg'
import Home from './profileScreen/Home'
import Wallet from './profileScreen/wallet';
import Invest from './profileScreen/Invest';
import Editprofile from './profileScreen/Editprofile'
import {BrowserRouter as Router, Routes ,Route,useNavigate} from 'react-router-dom'



const Profile = () => {
//
  const {setloginmsg,profile,setprofile,account,setaccount,changepos,setacctrade,acctrade} = useContext(DataContext);
  const navigate = useNavigate();
  const [colorp,setcolorp] = useState('')
  const [colorh,setcolorh] = useState(`#50d71e`)
  const [colorw,setcolorw] = useState('')
  const [colorc,setcolorc] = useState('')
  const [refresh,setrefresh] = useState(false);
  const[wait,setwait]=useState(true);
 

  const clearlog = async()=>{

    setloginmsg(prevState=>({
      ...prevState,
      message:"",
      id:"",
      token:""

  }))
  
  let log = JSON.parse(sessionStorage.getItem('login'))
 

  if(log){

     Fetchprofile(log,setprofile,setrefresh)
     Fetchaccount(log,setrefresh,setaccount,changepos,setacctrade)
     setwait(false)

  }else{
    navigate('/login')
    return
  }

  

  navigate('home/')
  

  }

 useEffect(()=>{
  clearlog()
 },[])



  return(
  <div className='w-full bg-indigo-100 pt-8 h-lvh overflow-scroll scroll-smooth'>
 
 {refresh &&
  <div>
  <div className='overflow-auto'>
       <Routes>
       <Route path='/home' element={<Home/>} />
       </Routes>

       <Routes>
       <Route path='wallet/' element={<Wallet/>} 
       />
       </Routes>

       <Routes>
       <Route path='invest/' element={<Invest/>} />
       </Routes>

       <Routes>
       <Route path='edit/' element={<Editprofile/>} />
       </Routes>
     </div>
       
  
    
   <footer className='bg-slate-50 w-full bottom-0 left-0 right-0 absolute h-12 grid grid-flow-col pl-4 grid-cols-4 pb-4 mx-auto place-content-center z-20'>
    
    <button className={`w-11 h-11 rounded-full `} onClick={(e)=>{
      setcolorh('#50d71e')
      setcolorc('')
      setcolorw('')
      setcolorp('')

      navigate('home/')
    }}style={{ backgroundColor: `${colorh}` }}>
    <img alt='homeimg' src={homeimg} className='mx-auto' >
    </img>
    </button>

    <button className={`w-11 h-11 rounded-full`}onClick={(e)=>{
       setcolorh('')
       setcolorc('')
       setcolorw('#50d71e')
       setcolorp('')
       navigate('wallet/')
    }}style={{ backgroundColor: `${colorw}` }}>
    <img alt='homeimg' src={walletimg} className='mx-auto'>
    </img>
    </button>

    <button className={`{w-11 h-11 rounded-full }`}onClick={(e)=>{
       setcolorh('')
       setcolorc('#50d71e')
       setcolorw('')
       setcolorp('')
       navigate('invest/')
    }}style={{ backgroundColor: `${colorc}` }}>
    <img alt='homeimg' src={candleimg} className='mx-auto'>
    </img>
    </button>
   
    <button className='w-11 h-11 rounded-full' onClick={(e)=>{
       setcolorh('')
       setcolorc('')
       setcolorw('')
       setcolorp('#50d71e')
       navigate('edit/')
    }} style={{ backgroundColor: `${colorp}` }}>
    <img alt='homeimg' src={person} className='mx-auto'>
    </img>
    </button>
   
     </footer>
  </div> 
 }

 {wait && 
 <div className='text-center my-auto'>
  please wait..... {`${account.message}`} {`${profile.message}`}
 </div>
}
  
    </div>
  )
}

export default Profile