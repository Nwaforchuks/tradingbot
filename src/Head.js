import React from 'react'
import './tailwind.css'
import {Link,useNavigate} from 'react-router-dom'
import DataContext from './store/store'
import { useContext,useEffect} from 'react'


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
    <header className='fixed bg-blue-600 w-full shadow-xl flex flex-row space-x-4 items-center z-10 header-one pl-4'>
     
   
    <div className='flex flex-row space-x-4'>
      {logout &&   <p className='shrink-0'>
        <Link to={`/register`} className='text-xs text-white '> Create account</Link>
      </p>}


     {logout &&     <p className='shrink-0'>
        <Link to={`/login`} className='text-xs text-white '> Login</Link>
      </p>}




      {loginmsg.ok &&  <p className='shrink-0' >
        <Link to={`/login`} className='text-xs text-white ' 
        onClick={(e)=>{
          Logout()

        }}
        > Logout</Link>
      </p>}

      {logout && <p className='shrink-0'>
        <Link to='/' className='text-xs text-white '> Home</Link>
      </p>}
 

      
    </div>

  </header>
</div>
  )
}

export default Head