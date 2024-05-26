import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext,useEffect } from 'react'
import DataContext from './store/store'
import connect from "./api/connect";

const Login = () => {

  const navigate = useNavigate()

  const {password,Setpassword,email,setemail,loginmsg,setloginmsg} = useContext(DataContext);
  const [logout,setlogout] = useState(false)
 
  
  useEffect(()=>{
    let log = JSON.parse(sessionStorage.getItem('login'))
    if(log){

       navigate('/profile')
    }
  },[])

 
  function getCookie(key) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "jwt";
  }


  const sumbmlogin = (e)=>{

    //sessionStorage.clear()

    setloginmsg(prevState=>({
      ok:"",
      message:"",
      id:"",
      token:""

  }))

   setlogout(false)
  
    if(!email){
      
      return;

    }else if(!password){
     
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

        
       
          sessionStorage.setItem('login',JSON.stringify(res.data))
          navigate('/profile',{ replace: true })

          
      }else if(res.data.ok === false){
         
          setloginmsg(prevState=>({
              ...prevState,
              ok:false,
              message:res.data.message

          }))

          setlogout(true)
         
       
      }
  }).catch((err)=>{
      if(err.response){

        setloginmsg(prevState=>({
          ...prevState,
          ok:false,
          message:err.response.data.message

      }))

      setlogout(true)

          
      }else{

        setloginmsg(prevState=>({
          ...prevState,
          ok:false,
          message:err.message

      }))

      setlogout(true)
          
      }

  })


    
      //sessionStorage.setItem('login',JSON.stringify(login));
     
 
    }

   
  
  return (
    
     <div className=' pt-20 w-full  overflow-y-auto  absolute sm:mb-20 mx-auto pb-32 my-auto px-5'>
      <form className=' border-solid border-2 mx-auto overflow-auto border-blue-300 rounded-lg px-4 my-auto bg-sky-100 shadow-lg shadow-orange-300 ' id='info'
      onSubmit={(e)=>{
        e.preventDefault()
      
      }}
      >
        <legend className='text-center border-b-2 border-solid border-red-300 mb-4 font-semibold'> LOG-IN</legend>
        <fieldset>
         
        <input type='email' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder='Email' required className='border-b-2 border-solid border-slate-400 block w-full rounded-lg mb-2'
          onChange={(e)=>{

         setemail(e.target.value.toString())
          

             
          }}>
          </input>

          <input type='password' placeholder='Password' required className='border-b-2 border-solid border-slate-400 block w-full rounded-lg mb-2' id='pas1'
           onChange={(e)=>{

          Setpassword(e.target.value.toString())
            
         }}>


         </input>
         
        
        

          <button type='submit' className='border border-solid border-blue-400 block w-full rounded-lg  mb-4 bg-blue-500 active:bg-blue-100 hover:bg-blue-200'
          onClick={(e)=>{
             
              sumbmlogin(e)
           
      
          }}
          > Login
          </button>


        </fieldset>
      
      </form>

      {logout &&  <p className='border-solid boder-2 rounded-lg border-red-500 bg-red-400 w-1/2 h-1/2 mx-auto block pb-8 pt-2'>

<Link to={`/login`}  className='mx-auto pt-5 my-10 text-center w-full  text-white font-semibold  block'>
   error!{`${loginmsg.message}`}
  
   </Link>
</p>}

     
      </div>

   
  )

}
export default Login