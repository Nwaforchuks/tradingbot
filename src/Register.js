import { useNavigate} from 'react-router-dom'
import { useContext,useEffect, useState } from 'react'
import DataContext from './store/store'
import connect from "./api/connect";
import DotLoader from "react-spinners/DotLoader";



const Register = () => {


    const navigate = useNavigate();
    const [msg,setmsg] = useState('')
    const [newpass,setnewpass] = useState('')
    const [signup,setsignup] = useState(true);
    const [load,setload] = useState(false)
  
    useEffect(()=>{
      let log = JSON.parse(sessionStorage.getItem('login'))
      if(log){
  
         navigate('/profile')
      }
    },[])

  const {register,Setregister,SetnetMessage} = useContext(DataContext);






  const sumbmlogin = (e)=>{
    setmsg('')
    e.preventDefault()
    setload(true);
    setsignup(false)
    if(!register.name && !register.surname && !register.age && !register.state 
      && !register.country && !register.city
      ){
        navigate('/create',{ replace: true })
      }

  
    if(!register.email){
      setmsg('Email field Empty')
      setload(false);
      setsignup(true)
      return;

    }else if(!register.password){
      setmsg('Password field Empty')
      setload(false);
      setsignup(true)
      return;
    }

    if(register.password !== newpass){
      setmsg('Password Mismatch')
      setload(false);
      setsignup(true)
      return
      
    }
    Setregister(prev=>({
      ...prev,
      address: 'none'
    }))
    
    connect.post("/register",register).then((response)=>{
      let res = response;
      if(res.data.ok === true){
          SetnetMessage(prevState=>({
              ...prevState,
              Success:true,
              Message:res.data.message

          }))

          // go to page make go tell you say completed contiues
         
          
          
      }else if(res.data.ok === false){
         
          SetnetMessage(prevState=>({
              ...prevState,
              Errors:false,
              Message:res.data.message

          }))
          setload(false);
          setsignup(true)

          setmsg(res.data.message)

          
        
       
      }
  }).catch((err)=>{
      if(err.response){

          SetnetMessage(prevState=>({
              ...prevState,
              Errors:false,
              Message: err.response.data.message

          }))
          setload(false);
          setsignup(true)

          setmsg(err.response.data.message)
          
      }else{

          SetnetMessage(prevState=>({
              ...prevState,
              Errors:false,
              Message:err.message

          }))
          setload(false);
          setsignup(true)

          setmsg(err.message)
          
      }

  })

  

  }


 

  return (
    <div className='w-full h-lvh bg-gradient-to-b from-violet-700  to-blue-500 px-3 py-3'
    >
      <form className='w-full h-fit my-auto mx-auto'>

      
        <legend className='text-center text-slate-50 mt-7 text-lg '> Almost there!</legend>
        <fieldset>

        <p className=' block w-full rounded-lg mb-2 text-center bg-red-600'>
            {`${msg}`}

          </p>

          <input type='email' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder='Email Address' required className='block mt-4 mx-auto w-full rounded-lg
             bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
          onChange={(e)=>{

            Setregister(prev=>({
              ...prev,
              email: e.target.value.toString()
            }))
            

             
          }}>
          </input>

          <input type='password' placeholder='Password' required className='block mt-4 mx-auto w-full rounded-lg
             bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
           id='pas1'
           onChange={(e)=>{
           
            Setregister(prev=>({
              ...prev,
              password: e.target.value.toString()
            }))
            
            
            
         }}
         pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
         
          >
          </input>


          <input type='password' placeholder='Confirm Password' required className='block mt-4 mx-auto w-full rounded-lg
             bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100' id="pas2" accordion 
          onChange={(e)=>{
            setnewpass( e.target.value.toString())
            
          }}
          >
          </input>

          
         
         {signup && 
         <button type='submit' className='mt-4 mx-auto w-full rounded-lg
         bg-slate-50 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2
        placeholder:text-slate-100 font-bold active:bg-slate-300 overflow-auto  '
      onClick={(e)=>{
        sumbmlogin(e);
      }}
      > <p className='text-center mx-auto'>Sign Up  </p>
      </button>
         }
          

          <DotLoader
          className='mx-auto mt-4 z-10'
          
          loading={load}
          
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
         


        </fieldset>
      </form>

     


    </div>
  )
}

export default Register