import countryList from './data/countrie'
import { Link , useNavigate} from 'react-router-dom'
import { useContext,useEffect } from 'react'
import DataContext from './store/store'
import connect from "./api/connect";



const Register = () => {


    const navigate = useNavigate();
  
    useEffect(()=>{
      let log = JSON.parse(sessionStorage.getItem('login'))
      if(log){
  
         navigate('/profile')
      }
    },[])

  const {Setcreate,register,
        Setregister,netMessage,sub,setsub,SetnetMessage} = useContext(DataContext);


    
    

  let values = (value)=>{
    if(value.length >=27){
     return `${value.slice(0,27)}...`
    }else{
      return value
    }
  } 



  let password2 = undefined;

  const sumbmlogin = (e)=>{

  
    if(!register.email){
      
      return;

    }else if(!register.password){
     
      return;
    }else if(!register.address){
     
      return;
    }

    if(register.password !== password2){
      e.view.document.getElementById('pascheck').style.visibility = "visible"
      return
      
    }

    connect.post("/register",register).then((response)=>{
      let res = response;
      if(res.data.ok === true){
          SetnetMessage(prevState=>({
              ...prevState,
              Success:true,
              Message:res.data.message

          }))
          
          
      }else if(res.data.ok === false){
         
          SetnetMessage(prevState=>({
              ...prevState,
              Errors:false,
              Message:res.data.message

          }))

          
        
       
      }
  }).catch((err)=>{
      if(err.response){

          SetnetMessage(prevState=>({
              ...prevState,
              Errors:true,
              Message: err.response.data.message

          }))
          
      }else{

          SetnetMessage(prevState=>({
              ...prevState,
              Errors:true,
              Message:err.message

          }))
          
      }

  })

  setsub(false)
   
   Setcreate(true)
  //   SetnetMessage(prevState=>({
  //     ...prevState,
  //     Errors:false,
  //     Message:'',
  //     Success:false

  // }))
    
   console.log(register)
   // e.view.document.getElementById(id).style.display="none"
   

  }

  const sumbmitInfo = (e,id)=>{

    if(!register.city){
      
      return;

    }else if(!register.country){
     
      return;
    }else if(!register.name){
     
      return;
    }else if(!register.state){
     
      return;
    }else if(!register.surname){
     
      return;
    }
     
   console.log(register)
    e.view.document.getElementById(id).style.display="none"
    setsub(true)
    
  }

  

 

  return (
    <div className=' pt-20 w-full  overflow-y-auto scroll-my-8 absolute sm:mb-32 mx-auto pb-32'>
      <form className=' border-solid border-2 mx-auto overflow-auto border-blue-300 rounded-lg px-4 my-auto bg-sky-100 shadow-lg shadow-orange-300 w-2/3' id='info'
      onSubmit={(e)=>{
        e.preventDefault()
       // Setcreate(true);
      }}
      >
        <legend className='text-center border-b-2 border-solid border-red-300 mb-4 font-semibold'> User Information</legend>
        <fieldset>

          <input type='text' placeholder='Name' required={true} className='border-b-2 border-solid border-slate-400 block w-full rounded-lg mb-2' accordion 
          onChange={(e)=>{
              
              Setregister(prev=>({
                ...prev,
                name: e.target.value.toString()
              }))
          }}
          >
          </input>
          

          <input type='text' placeholder='Surname' required className='border-b-2 border-solid border-slate-400 block w-full rounded-lg mb-2'
           onChange={(e)=>{

            Setregister(prev=>({
              ...prev,
              surname: e.target.value.toString()
            }))

        }} 
          >
          </input>


          <input type='number' placeholder='Age' required className='border-b-2 border-solid border-slate-400 block w-1/2 rounded-lg mb-2'
           onChange={(e)=>{

            Setregister(prev=>({
              ...prev,
              age: e.target.value.toString()
            }))
        }} min={16} pattern='[1-9]{2}'
          >
          </input>

           <div className='border-b-2 border-solid border-slate-400 block w-fit rounded-lg mb-2'>
            <label className='block'> Select Country</label>
              <select className='w-fit' accordion 
               onChange={(e)=>{

                Setregister(prev=>({
                  ...prev,
                  country: e.target.value.toString()
                }))
              
            }}   
              >
            
            {countryList.map(value=>(<option value={`${value}`} className='w-fit'>
             { 
               values(value)
             }
            </option>))}

          </select>
           </div>
           
        
          
          <input type='text' placeholder='State' required className='border-b-2 border-solid border-slate-400 block w-full rounded-lg mb-2'
           onChange={(e)=>{

            Setregister(prev=>({
              ...prev,
              state: e.target.value.toString()
            }))
           
        }}   
          >
          </input>

          <input type='text' placeholder='City' required className='border-b-2 border-solid border-slate-400 block w-full rounded-lg  mb-4 '
           onChange={(e)=>{
            
            Setregister(prev=>({
              ...prev,
              city: e.target.value.toString()
            }))
            
        }}   >
          </input>

          <button type='submit' className='border border-solid border-blue-400 block w-full rounded-lg  mb-4 bg-blue-500 active:bg-blue-100 hover:bg-blue-200'
          onClick={(e)=>{
            sumbmitInfo(e,"info")
      
          }}
          > Procced
          </button>


        </fieldset>
      </form>

    {sub &&
      <form className=' border-solid border-2 mx-auto overflow-auto border-blue-300 rounded-lg px-4 my-auto bg-sky-100 shadow-lg shadow-orange-300 w-2/3 mt-3' onSubmit={(e)=>{
        e.preventDefault()
        
        
      }}>
        <legend className='text-center border-b-2 border-solid border-red-300 mb-4'> Login credential</legend>
        <fieldset>

        <div className='border-2 border-solid border-red-200 block w-full rounded-lg mb-2 text-center bg-red-600 invisible' id='pascheck'>
            password mismatch try again

          </div>

          <input type='email' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder='Email' required className='border-b-2 border-solid border-slate-400 block w-full rounded-lg mb-2'
          onChange={(e)=>{

            Setregister(prev=>({
              ...prev,
              email: e.target.value.toString()
            }))
            

             
          }}>
          </input>

          <input type='password' placeholder='Password' required className='border-b-2 border-solid border-slate-400 block w-full rounded-lg mb-2' id='pas1'
           onChange={(e)=>{
           
            Setregister(prev=>({
              ...prev,
              password: e.target.value.toString()
            }))
            
            
            
         }}
         pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
         
          >
          </input>


          <input type='password' placeholder='Password' required className='border-b-2 border-solid border-slate-400 block w-full rounded-lg mb-2' id="pas2" accordion 
          onChange={(e)=>{
            password2 = e.target.value.toString()
          }}
          >
          </input>

          <input type='text' placeholder='Deposit Wallet Address/ID' required className='border-b-2 border-solid border-slate-400 block w-full rounded-lg mb-2'
           onChange={(e)=>{

            Setregister(prev=>({
              ...prev,
              address: e.target.value.toString()
            }))
            
         }}
        
         >
          </input>
          <aside className='mb-4'>
            <details>

            <summary className='font-semibold text-pretty'>*Important Note</summary>

            <p>
              *wallet address will be used for verifiing your deposits.<br></br><br></br>
              *Please make sure you register with your correct crypto transation
              address/ID used for transfering USDT via Ethereum Network
            </p>
            </details>
            
          </aside>

         

          <button type='submit' className='border border-solid border-blue-400 block w-full rounded-lg  mb-4 bg-blue-500 active:bg-blue-100 hover:bg-blue-200'
          onClick={(e)=>{
            sumbmlogin(e);
          }}
          > Procced
          </button>

         


        </fieldset>
      </form>}
      
    
     
      {netMessage.Errors &&       
      <p className='border-solid boder-2 rounded-lg border-red-500 bg-red-400 w-1/2 h-1/2 mx-auto block pb-8'>

      <Link to={`/login`}  className='mx-auto my-10 text-center w-full  text-white font-semibold' onClick={(e)=>{
        SetnetMessage(prevState=>({
          ...prevState,
          Errors:false,
          Message:'',
          Success:false

      }))
      }}>
        <p className=' text-center block'> error! {`${netMessage.Message}`}</p>
        

         <p >Login</p>
         </Link>
      </p>
     
      }

     


      {netMessage.Success &&
      <p className='border-solid boder-2 rounded-lg border-green-500 bg-green-400 w-1/2 h-1/2 mx-auto block pb-8'>
         <p className='text-center block'> {`${netMessage.Message}`}</p>
         <Link to='/login' className='mx-auto my-10 text-center w-full  text-white font-semibold' onClick={(e)=>{
        SetnetMessage(prevState=>({
          ...prevState,
          Errors:false,
          Message:'',
          Success:false

      }))
      }}>
         <p className=' text-center block'>Procced</p>
         </Link>
         
      </p>}


    </div>
  )
}

export default Register