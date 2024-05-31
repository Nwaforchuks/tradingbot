import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext,useEffect } from 'react'
import DataContext from './store/store'
import connect from "./api/connect";
import DotLoader from "react-spinners/DotLoader";

const Login = () => {

  const navigate = useNavigate()

  const [signup,setsignup] = useState(true);
  const [load,setload] = useState(false)

  const {password,Setpassword,email,setemail,loginmsg,setloginmsg,Setregister} = useContext(DataContext);
 
  
  useEffect(()=>{
    let log = JSON.parse(sessionStorage.getItem('login'))
    if(log){

       navigate('/profile')
    }
  },[])

 



  const sumbmlogin = (e)=>{

    sessionStorage.clear()
    setload(true)
    setsignup(false)
    setloginmsg(prevState=>({
      ok:"",
      message:"",
      id:"",
      token:""

  }))

  
    if(!email){
      setloginmsg(prevState=>({
        message:'Email address Empty'
      
    }))
    setload(false)
    setsignup(true)
      return;

    }else if(!password){
      
      setload(false)
      setsignup(true)
      setloginmsg(prevState=>({
        message:'Password address Empty'
      
    }))
     
      return;
    }

    connect.post("/login",{'email':email,'password':password}).then((response)=>{
      let res = response;

      if(res.data.ok === true){

          setloginmsg(prevState=>({
            ok:res.data.ok,
            message:res.data.message,
            id:res.data.id,
            token:res.data.token
      
        }))

        Setregister(prevState=>({
          country:'',
          name:'',
          surname:'',
          state:'',
          city:'',
          email:'',
          password:'',
          address:'',
          age:''
    
      }))

        
       
          sessionStorage.setItem('login',JSON.stringify(res.data))
          navigate('/profile',{ replace: true })

          
      }else if(res.data.ok === false){
         
          setloginmsg(prevState=>({
              ...prevState,
              ok:false,
              message:res.data.message

          }))
          setload(false)
          setsignup(true)

         
       
      }
  }).catch((err)=>{
      if(err.response){

        setloginmsg(prevState=>({
          ...prevState,
          ok:false,
          message:err.response.data.message

      }))
      setload(false)
      setsignup(true)

    

          
      }else{

        setloginmsg(prevState=>({
          ...prevState,
          ok:false,
          message:err.message

      }))
      setload(false)
      setsignup(true)

          
      }

  })


    
     
     
 
    }

   
  
  return (
    
    <div className='w-full h-lvh bg-gradient-to-b from-violet-700  to-blue-500 px-3 py-3'
    >
      <form className='w-full h-fit my-auto mx-auto'>
      <p className='text-center text-slate-50 mt-7 text-lg '>
                <span className='font-bold'>Welcome,</span> <br></br>
                Glad to see you!
            </p>

            <p className='text-center'>{`${loginmsg.message}`}</p>
      
        <fieldset>
         
        <input type='email' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder='Email' required className='block mt-4 mx-auto w-full rounded-lg
             bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
          onChange={(e)=>{

         setemail(e.target.value.toString())
          

             
          }}>
          </input>

          <input type='password' placeholder='Password' required className='block mt-4 mx-auto w-full rounded-lg
             bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100' id='pas1'
           onChange={(e)=>{

          Setpassword(e.target.value.toString())
            
         }}>


         </input>
         
        
        
          {signup && 
                    <button type='submit' className='mt-4 mx-auto w-full rounded-lg
                    bg-slate-50 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2
                   placeholder:text-slate-100 font-bold active:bg-slate-300 overflow-auto  '
                     onClick={(e)=>{
                        
                         sumbmlogin(e)
                      
                 
                     }}
                     > Login
                     </button>
          }



        </fieldset>
      
      </form>

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
export default Login