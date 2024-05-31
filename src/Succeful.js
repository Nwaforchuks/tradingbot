import React from 'react'
import happy from './happy.png'
import { useContext,useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import DataContext from './store/store'
import DotLoader from "react-spinners/DotLoader";
import connect from "./api/connect";


const Succeful = () => {

  const {register,Setregister,SetnetMessage , netMessage ,setloginmsg} = useContext(DataContext);
    const [signup,setsignup] = useState(true);
    const [load,setload] = useState(false)

  const check_logs = ()=>{
    let log = JSON.parse(sessionStorage.getItem('login'))
    if(log){

       navigate('/profile')
    }
    if(!netMessage.ok){
      navigate('/login')
    }

  }
  useEffect(()=>{
   check_logs()
  },[])
  
  const navigate = useNavigate();

  const sumbmlogin = (e)=>{

    //sessionStorage.clear()
    setload(true)
    setsignup(false)

    setloginmsg(prevState=>({
      ok:"",
      message:"",
      id:"",
      token:""

  }))

  
  

    connect.post("/login",{'email':register.email,'password':register.password}).then((response)=>{
      let res = response;

      if(res.data.ok === true){

          setloginmsg(prevState=>({
            ok:res.data.ok,
            message:res.data.message,
            id:res.data.id,
            token:res.data.token
      
        }))

        
       
          sessionStorage.setItem('login',JSON.stringify(res.data))
          navigate('/profile',{ replace: true })

          
      }else if(res.data.ok === false){
         
        navigate('/login',{ replace: true })
         
       
      }
  }).catch((err)=>{
      if(err.response){

        setloginmsg(prevState=>({
          ...prevState,
          ok:false,
          message:err.response.data.message

      }))

      navigate('/login',{ replace: true })

          
      }else{

        setloginmsg(prevState=>({
          ...prevState,
          ok:false,
          message:err.message

      }))

      navigate('/login',{ replace: true })
          
      }

  })


    
      //sessionStorage.setItem('login',JSON.stringify(login));
     
 
    }



  return (
    <div className='w-full h-lvh my-auto mx-auto bg-gradient-to-b from-violet-700  to-blue-500 px-3 py-3'>
     <div className='full my-auto mx-auto mt-20 bg-indigo-400 py-3 rounded-full '>
        <img alt='happy img' src={happy}
        className='w-20 object-cover block mx-auto'
        >
        </img>

        <p className='text-center font-bold text-slate-50 block'>{`${netMessage.Message}`}</p>

        {signup && 
         <button className='text-center text-green-200 font-bold underline underline-offset-4 mx-auto block'
         onClick={(e)=>{
          sumbmlogin(e);
         }}
         >Contiue</button>
        }
       

     </div>
     <DotLoader
          className='mx-auto mt-4 z-10'
          
          loading={load}
          
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

    </div>
  )
}

export default Succeful