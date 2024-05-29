//import Profile from "../Profile";
import connect from "../api/connect";

const uri = 'https://tradebot-api-vj4f.onrender.com'

const changetrade = (trade)=>{
  if(trade === "start"){
    return "stop"
  }else{
    return "start"
  }
}

const Fetchaccount = (log,setrefresh,setwait,setaccount,changepos,setacctrade)=>{

    setaccount(prevState=>({
        ...prevState,
        ok:false,
        message:"",
        amount:"",
        trade_amount:"",
        crypto:"",
        last_transsaction:"",
        tradeposition:""
    }))

    setacctrade(prev=>({
      ...prev,
      tradeposition:""
    }))

    connect.get(`/getuseraccount`,{params:{token:log}}).then((response)=>{
      let res = response;
      
      if(res.data.ok === true){

          setaccount(prevState=>({
            ...prevState,
            ok:res.data.ok,
            message:res.data.message,
            amount:res.data.amount,
            trade_amount:res.data.trade_amount,
            crypto:res.data.crypto,
            last_transsaction:res.data.last_transsaction,
            tradeposition:changepos(res.data.tradeposition)
        }))

        setacctrade(prev=>({
          ...prev,
          tradeposition:changetrade(res.data.tradeposition),
          crypto:res.data.crypto,
          trade_amount:res.data.trade_amount
          
        }))

        setrefresh(false)
        setwait(true)

    

          
      }else if(res.data.ok === false){
         
        setaccount(prevState=>({
              ...prevState,
              ok:false,
              message:res.data.message

          }))
          setrefresh(true)
          setwait(false)
         
       
      }
  }).catch((err)=>{
      if(err.response){

        setaccount(prevState=>({
          ...prevState,
          ok:false,
          message:err.response.data.message

      }))

      setrefresh(true)
      setwait(false)

          
      }else{

        setaccount(prevState=>({
          ...prevState,
          ok:false,
          message:err.message

      }))

      setrefresh(true)
      setwait(false)
          
      }

  })

 

  }

  const Fetchprofile = (log,setprofile,setrefresh,setwait)=>{

    setprofile(prevState=>({
        ...prevState,
        ok:false,
        message:"",
        email:"",
        name:"",
        surname:"",
        country:"",
        state:"",
        address:'',
        age:'',
        city:""
    }))

    connect.get(`/getuserprofile`,{params:{token:log}}).then((response)=>{
      let res = response;

      if(res.data.ok === true){

        setprofile(prevState=>({
            ...prevState,
            ok:true,
            message:res.data.message,
            email:res.data.email,
            name:res.data.name,
            surname:res.data.surname,
            country:res.data.country,
            state:res.data.state,
            address:res.data.address,
            age:res.data.age,
            city:res.data.city
        }))

        setrefresh(false)
        setwait(true)

    

          
      }else if(res.data.ok === false){
         
        setprofile(prevState=>({
              ...prevState,
              ok:false,
              message:res.data.message

          }))
          setrefresh(true)
          setwait(false)
         
       
      }
  }).catch((err)=>{
      if(err.response){

        setprofile(prevState=>({
            ...prevState,
            ok:false,
            message:err.response.message

        }))

      setrefresh(true)
      setwait(false)

          
      }else{

        setprofile(prevState=>({
            ...prevState,
            ok:false,
            message:err.message

        }))

      setrefresh(true)
      setwait(false)
          
      }

  })

 

  }


  const Getwithdraw = async(log,setwithdraw,setdepositbutt,address,amount)=>{

    setwithdraw(prevState=>({
      ...prevState,
      ok:false,
      message:" please wait...",
     
  }))
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json"
    }
     
     let bodyContent = JSON.stringify({
       "addresss":address,
       "amount": amount,
        "id": log,
         "token": log
       
      });
     
     let response = await fetch(`${uri}/userwithdraw`, { 
       method: "PUT",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.text();
     console.log(data);
     let data1 = JSON.parse(data)
      
      if(data1.ok === true){

        

         setwithdraw(prevState=>({
          ...prevState,
          ok:true,
          message:data1.message,
         
         }))

         setdepositbutt(false)

         return
        
         

      }
      
      
      if(data1.ok === false){

       
        setwithdraw(prevState=>({
         ...prevState,
          ok:false,
         message:data1.message,
    
        }))
        setdepositbutt(true)
        return;
      }else{

        setwithdraw(prevState=>({
          ...prevState,
           ok:false,
          message:"Failed to Connect to server",
     
         }))
         setdepositbutt(true)
        
      }

       
     
   
     
  }

  const UpdateProfie = async(log,setupdatepro,profile)=>{

    setupdatepro(prevState=>({
      ...prevState,
      ok:false,
      message:"updating...",
     
     }))
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json"
    }
     
     let bodyContent = JSON.stringify({
       "name":profile.name,
       "surname": profile.surname,
       "country":profile.country,
       "state":profile.state,
       "city":profile.city,
       "age":profile.age,
       "id": log,
       "token": log
       
      });
     
     let response = await fetch(`${uri}/getuserprofile`, { 
       method: "PUT",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.text();
     console.log(data);
     let data1 = JSON.parse(data)
      
      if(data1.ok === true){

        

        setupdatepro(prevState=>({
          ...prevState,
          ok:true,
          message:data1.message,
         
         }))

         return;

        
        
         

      }else if(data1.ok === false){

       
        setupdatepro(prevState=>({
         ...prevState,
          ok:false,
         message:data1.message,
    
        }))
        return
       
      }else {

        setupdatepro(prevState=>({
          ...prevState,
           ok:false,
          message:"Failed to Connect to server",
     
         }))
         return
        
        
      }

       
     
   
     
  }

  const Fetchgain = async(log,Setgain)=>{

    Setgain(prevState=>({
      ...Setgain,
      ok:false,
      message:"Getting gain...",
     
     }))

     try{
      let data1 = await connect.get(`/usergain`,{params:{id:log,token:log}})
      if(data1.data.ok === true){

        

        Setgain(prevState=>({
          ...prevState,
          ok:true,
          message:data1.data.message,
          gains:data1.data.gain
         
         }))

         return;

        
        
         

      }else if(data1.data.ok === false){

       
        Setgain(prevState=>({
         ...prevState,
          ok:false,
         message:data1.data.message,
    
        }))
        return
       
      }

     }catch(err){
      if(err.response){

        Setgain(prevState=>({
          ...Setgain,
          ok:false,
          message:err.response.message,
         
         }))

      } else {

        Setgain(prevState=>({
          ...prevState,
           ok:false,
          message:err.message,
     
         }))
         return
        
        
      }
     }
    
     
    
    
      
    

       
     
   
     
  }

  const UpdateBot = async(log,acctrade,setbotmsg)=>{

   setbotmsg('please wait...')
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json"
    }
     
     let bodyContent = JSON.stringify({
       "tradeposition":acctrade.tradeposition,
       "crypto": acctrade.crypto,
       "trade_amount":acctrade.trade_amount,
        "id": log,
         "token": log
       
      });
     
     let response = await fetch(`${uri}/getuseraccount`, { 
       method: "PUT",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.text();
     
     let data1 = JSON.parse(data)
      
      if(data1.ok === true){


         setbotmsg(data1.message)

         return
        
      }
      
      
      if(data1.ok === false){
        
        setbotmsg(data1.message)
        return;
      }else{

        setbotmsg(data1.message)
        
      }

       
     
   
     
  }

  
  export default Fetchaccount
  export  {Fetchprofile, Getwithdraw,UpdateProfie,Fetchgain,UpdateBot}
  