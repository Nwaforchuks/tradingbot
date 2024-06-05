import React from 'react'
import './tailwind.css'
import {Link,useNavigate} from 'react-router-dom'
import DataContext from './store/store'
import { useContext,useEffect} from 'react'
import message from './message.png'
import facebook from './facebook1.png'
import logoutimg from './logout1.svg'


const Head = () => {

const navigate = useNavigate()
const {logout,loginmsg,setloginmsg} = useContext(DataContext);

useEffect(()=>{
  let log = JSON.parse(sessionStorage.getItem('login'))

  if(log){
    setloginmsg(prev=>({
      ...prev,
      ok:true
    }))
  }


},[])
 
  const Logout = ()=>{
    setloginmsg(prev=>({
      ...prev,
      ok:false

    }))
    let log = JSON.parse(sessionStorage.getItem('login'))
    sessionStorage.removeItem('login')
   
   
   navigate('/login',{ replace: true })
  }
  
  return (
    <div> 
    <header className='fixed bg-blue-600 w-full shadow-xl flex flex-row space-x-4 items-center z-10 header-one pl-4 h-8 overflow-auto'>
     
   
    <div className='flex flex-row space-x-4'>
      {logout &&   <p className='shrink-0'>
        <Link to={`/create`} className='text-xs text-white '> Create account</Link>
      </p>}

     


     {logout &&     <p className='shrink-0'>
        <Link to={`/login`} className='text-xs text-white '> Login</Link>
      </p>}




      {loginmsg.ok &&  <p className='shrink-0 flex flex-nowrap' >
       <p className='text-xs text-white' >Logout</p>
        <Link to={`/login`} 
        onClick={(e)=>{
          Logout()

        }}
        >  <img alt='logoutimg' src={logoutimg}>
        </img> </Link>
      </p>}

      {loginmsg.ok && <button
      onClick={(e)=>{
      
        window.location.href ='mailto:chukwuman03@gmail.com';

      }}
      >
        <img alt='message img' src={message}>

        </img>

      </button>
     }

    {loginmsg.ok && <button onClick={(e)=>{
    
      window.location.href ='https://www.facebook.com/profile.php?id=61560035648493';

    }}>
        <img alt='message img' src={facebook} className='w-6 object-cover'>

        </img>
      </button>
     }

      {logout && <button className='shrink-0'>
        
        <Link to='/' className='text-xs text-white '> Home</Link>
      </button>}
 

      
    </div>

  </header>
</div>
  )
}

export default Head