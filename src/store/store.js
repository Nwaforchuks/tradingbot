// import {createStore,action,thunk} from "easy-peasy"
// export default createStore(
//     {
       
//         email:'',
//         password:'',


//         userid:"",
//         logedin : false,

//         Setcountry:action((state,payload)=>{
//             state.info_regis.country = payload

//         }),

//         Setname:action((state,payload)=>{
//             state.info_regis.name = payload
//         }),

//         Setsurname:action((state,payload)=>{
//            state.info_regis.surname = payload
//         }),

//         Setstate:action((state,payload)=>{
//             state.info_regis.state = payload
//         }),

//         Setcity:action((state,payload)=>{
//           state.info_regis.city = payload
//         }),

//         Setemail:action((state,payload)=>{
//           state.info_regis.email = payload
//         }),

//         Setpassword:action((state,payload)=>{
//            state.info_regis.password = payload
//         }),

//         Setaddress:action((state,payload)=>{
//            state.info_regis.address = payload
//         }),

//         Setage:action((state,payload)=>{
//            state.info_regis.age = payload
//         }),

//         setError :action((state,payload)=>{
//             state.Errors = payload;
//         }),

//         setMessage :action((state,payload)=>{
//             state.Message = payload;
//         }),

//         setSuccess :action((state,payload)=>{
//             state.Success = payload;
//         }),

//         SetCreated:action((state,payload)=>{
//             state.created = payload
//         }),

//         SetemailL: action((state,payload)=>{
//             state.email = payload
//         }),

//         SetpasswordL : action((state,payload)=>{
//            state.password = payload;
//         }),
//         Setlogedin: action((state,payload)=>{
//             state.logedin = payload
//         }),

//         setuserid:action((state,payload)=>{
//           state.userid = payload
//         }),

//         resetRegister:action((state,payload)=>{
//             state.info_regis = payload;
//         }),
//         newUsers : thunk(async(actions,newuser,heapers)=>{

           
           
//             try{

//                 const response = await connect.post("/register",newuser)
//                 let res = response;
//                 if(res.ok === true){
//                     actions.setSuccess(true)
//                     actions.setMessage(res.message)
//                     actions.resetRegister({});
//                     actions.SetCreated(false);
                    
//                 }else if(res.ok === false){
                   
//                    actions.setError(true)
//                    actions.setMessage(res.message)
//                    actions.resetRegister({});
//                    actions.SetCreated(false);
                 
//                 }
//             }catch(err){
//                 if(err.response){
//                     actions.setError(true)
//                     actions.setMessage(err.response.data.message)
//                     actions.SetCreated(false);
//                     actions.resetRegister({});
//                 }else{

//                     actions.setError(true)
//                     actions.setMessage(err.message)
//                     actions.resetRegister({});
//                     actions.SetCreated(false);
//                 }
               
               
//             }
//         }),

//         loginuser: thunk(),
//     }
// )

import { createContext, useEffect,useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({children})=>{
    const [email,setemail]=useState('')
    const[password,Setpassword]=useState('');
    const [logout,setlogout] = useState(true)

    
    const [register,Setregister] = useState(
        {
            country:undefined,
            name:undefined,
            surname:undefined,
            state:undefined,
            city:undefined,
            email:undefined,
            password:undefined,
            address:undefined,
            age:undefined
       }

    )

    const [netMessage,SetnetMessage] = useState(
        {
            Errors : false,
            Success: false,
            Message : ''
        }

    )

    const [gain,Setgain] = useState(
        {
            ok : false,
            Message : '',
            gains: []
        }

    )



    const[loginmsg,setloginmsg] = useState(  JSON.parse(sessionStorage.getItem('login')) ||
         {
            "ok": false,
            "message": "",
            "id": "",
            "token":""
          }
    )
   
    const changepos = (pos)=>{
        if(pos=== 'stop'){
            return 'Offline'
        }else if(pos === "start"){
            return'Online'
        }
    }

    const [account,setaccount] = useState(
        {
            ok : false,
            amount: "",
            message : '',
            trade_amount:"",
            crypto:"",
            last_transsaction:'',
            tradeposition:''

        }

    )

    const [acctrade,setacctrade] = useState(
        {
            id:"",
            crypto:"",
            trade_amount:'',
            tradeposition:''
        }

    )

    const [profile,setprofile] = useState(
        {
            ok : false,
            message:'',
            email: "",
            name : '',
            surname:"",
            country:"",
            state:'',
            address:'',
            age:'',
            city:""



        }

    )

    const [withdraw,setwithdraw] = useState(
        {
            ok : false,
            message:'',
        }

    )

    const [updatepro,setupdatepro] = useState(
        {
            ok : false,
            message:'',
        }

    )

    const [botmsg,setbotmsg] = useState({
        ok:false,
        message:''
    })

   


    useEffect(()=>{
        
        if(loginmsg.ok === true){
            setlogout(false)
        }else if(loginmsg.ok===false){
            setlogout(true);
        }
    
               
        
    },[loginmsg])

   



    return(
        <DataContext.Provider value={{
            register, Setregister,
            netMessage,SetnetMessage,
            password,Setpassword,
            email,setemail,
            loginmsg,setloginmsg,logout,
            account,setaccount,changepos,
            setprofile,profile,
            withdraw,setwithdraw,
            updatepro,setupdatepro,
            gain,Setgain,acctrade,setacctrade,
            botmsg,setbotmsg
        }}>
            {children}
        </DataContext.Provider>
    )

}

export default DataContext;