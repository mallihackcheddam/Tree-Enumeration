import React,{useEffect, useState} from 'react'
import '../NodalOfficer/LogComp.css'
import NodalDropdown from '../NodalOfficer/NodalDropdown'
import { useLocation } from 'react-router-dom';

export default function LogComp({user}) {

    const [color,setColor]=useState("rgb(209, 209, 248)");
    const [status,setStatus]=useState(user.status);
    const loc=useLocation();

    // useEffect(()=>{
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ 
    //       nodal_email : loc.email,
    //       user_email : user.email,
    //       status : status
    //     })
    //   }
    //   fetch("http://127.0.0.1:8000/upload", requestOptions)
    //     .then((data) => data.json())
    //     .then((data) => console.log(data))
    // })

  if(user.image==="Image"){
    return (
    <div className='listbro' style={{backgroundColor:"#CACBCE"}}>
        <p><strong>{user.date}</strong></p>
        <p><strong>{user.organization}</strong></p>
        <p><strong>{user.noofspecies}</strong></p>
        <p><strong>{user.nooftrees}</strong></p>
        <p><strong>{user.image}</strong></p>
    </div>
  )}
  else{
    return (
        <div className='listbro' style={{backgroundColor:
        status==="Approved"?"#CBEFB6":
          status==="Rejected"?"#F8CCC9":"rgb(209, 209, 248)",transition:"0.8s ease"}}>
            <p>{user.date}</p>
            <p>{user.organization}</p>
            <p>{user.noofspecies}</p>
            <p>{user.nooftrees}</p>
            <button className='btn btn-primary'>View</button>
        </div>
      )
  }
}
