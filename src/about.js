import React from 'react'
import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
 const navigate = useNavigate()

  useEffect(()=>{
    let log = JSON.parse(sessionStorage.getItem('login'))
    if(log){

       navigate('/profile')
    }
  },[])
  return (
    <div>about us
        <hr/>
    </div>
  )
}
