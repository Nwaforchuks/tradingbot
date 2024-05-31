import React, { useState,useContext ,useEffect} from 'react'
import countryList from './data/countrie'
import {Link,useNavigate} from 'react-router-dom'
import DataContext from './store/store'

export default function Create() {

    useEffect(()=>{
        let log = JSON.parse(sessionStorage.getItem('login'))
        if(log){
    
           navigate('/profile')
        }
      },[])

    const [msg,setmsg] = useState('')
    const {register,Setregister} = useContext(DataContext);

    const navigate = useNavigate()

    let values = (value)=>{
        if(value.length >=27){
         return `${value.slice(0,27)}...`
        }else{
          return value
        }
      } 

      const sumbmitInfo = (e)=>{

        e.preventDefault();
        setmsg('')
      
        if(!register.city){
            setmsg(' City field Empty')
          return;
    
        }else if(!register.country){
            setmsg(' Country field Empty')
          return;
        }else if(!register.name){
            setmsg(' Name field Empty')
          return;
        }else if(!register.state){
            setmsg(' State field Empty')
          return;
        }else if(!register.surname){
            setmsg('Surname field Empty')
          return;
        }else if(!register.age){
            setmsg('Age field Empty')
          return;
        }

       
        console.log(register)
        navigate('/register')
         
       
        
      }
    



  return (
    <div className='w-full h-lvh bg-gradient-to-b from-violet-700  to-blue-500 px-3 py-3'
    >

        <form className='w-full h-fit my-auto mx-auto'>

            <p className='text-center text-slate-50 mt-7 text-lg '>
                <span className='font-bold'>Create Account</span> <br></br>
                to get started now!
            </p>

            <p className='text-center'>{`${msg}`}</p>

            <input  required={true} placeholder='Name' type='text' className='block mt-4 mx-auto w-full rounded-lg
             bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
             onChange={(e)=>{
              
                Setregister(prev=>({
                  ...prev,
                  name: e.target.value.toString()
                }))
            }}
             >
            </input>

            <input  required={true} placeholder='Surname' type='text' className='block mt-4 mx-auto w-full rounded-lg
             bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
             onChange={(e)=>{
              
                Setregister(prev=>({
                  ...prev,
                  surname: e.target.value.toString()
                }))
            }}
             >
            </input>

            <input  required={true} placeholder='Age' type='number' className='block mt-4 mx-auto w-full rounded-lg
             bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2
              placeholder:text-slate-100 pr-2'
              onChange={(e)=>{
              
                Setregister(prev=>({
                  ...prev,
                  age: e.target.value.toString()
                }))
            }}
              >
            </input>

            <label className='block  mt-4'> Select Country</label>
              <select  required={true} className='block mx-auto w-full rounded-lg
             bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2
             text-slate-100 pr-2' accordion 
               onChange={(e)=>{

                Setregister(prev=>({
                  ...prev,
                  country: e.target.value.toString()
                }))
              
            }}   
              >
            
            {countryList.map(value=>(<option value={`${value}`} className='w-fit text-slate-100'>
             { 
               values(value)
             }
            </option>))}

          </select>

          <input  required={true} placeholder='State' type='text' className='block mt-4 mx-auto w-full rounded-lg
             bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
             onChange={(e)=>{
              
                Setregister(prev=>({
                  ...prev,
                  state: e.target.value.toString()
                }))
            }}
             >
            </input>

            <input required={true} placeholder='City' type='text' className='block mt-4 mx-auto w-full rounded-lg
             bg-violet-500 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2 placeholder:text-slate-100'
             onChange={(e)=>{
              
                Setregister(prev=>({
                  ...prev,
                  city: e.target.value.toString()
                }))
            }}
             >
            </input>

            <button  className='block mt-4 mx-auto w-full rounded-lg
             bg-slate-50 border focus:border-transparent focus:ring-0 h-9 shadow-2xl pl-2
            placeholder:text-slate-100 font-bold active:bg-slate-300'

            onClick={(e)=>{
                sumbmitInfo(e)
              }
            }
            >Procced</button>


        </form>

        <p className='mt-2'>Already have an account?  <Link to={`/login`} className='text-sm text-white '> Login</Link></p>
    </div>
  )
}
