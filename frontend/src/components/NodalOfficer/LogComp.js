import React,{useState} from 'react'
import './LogComp.css'
import NodalDropdown from './NodalDropdown'

export default function LogComp({user}) {

    const [color,setColor]=useState("rgb(209, 209, 248)");
    const [status,setStatus]=useState(user.status);
    
    console.log(color);
  console.log(user);
  if(user.edhokati==="bold"){
    return (
    <div className='listbro' style={{backgroundColor:"#CACBCE"}}>
        <p><strong>{user.date}</strong></p>
        <p><strong>{user.username}</strong></p>
        <p><strong>{user.organization}</strong></p>
        <p><strong>{user.nodal_permit}</strong></p>
        <p><strong>{user.status}</strong></p>
    </div>
  )}
  else{
    return (
        <div className='listbro' style={{backgroundColor:
        status==="Approved"?"#CBEFB6":
          status==="Rejected"?"#F8CCC9":"rgb(209, 209, 248)"}}>
            <p>{user.date}</p>
            <p>{user.username}</p>
            <p>{user.organization}</p>
            <p>{user.nodal_permit}</p>
            <NodalDropdown status={status} setStatus={setStatus}/>
        </div>
      )
  }
}
