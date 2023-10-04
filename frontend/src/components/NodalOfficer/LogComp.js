import React, { useEffect, useState } from "react";
import "./LogComp.css";
import NodalDropdown from "./NodalDropdown";
import { useLocation } from "react-router-dom";

export default function LogComp({ user }) {
  const [color, setColor] = useState("rgb(209, 209, 248)");
  const [status, setStatus] = useState(user.status);
  const loc = useLocation();

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nodal_email: loc.email,
        user_email: user.email,
        status: status,
      }),
    };
    fetch("/upload", requestOptions)
      .then((data) => data.json())
      .then((data) => console.log(data));
  });

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

  if(user.edhokati==="bold"){
    return (
      <div className="listbro" style={{ backgroundColor: "#CACBCE" }}>
        <p>
          <strong>{user.date}</strong>
        </p>
        <p>
          <strong>{user.email}</strong>
        </p>
        <p>
          <strong>{user.organization}</strong>
        </p>
        <p>
          <strong>{user.nodal_permit}</strong>
        </p>
        <p>
          <strong>{user.status}</strong>
        </p>
      </div>
    );
  } else {
    return (
        <div className='listbro' style={{backgroundColor:
        status==="Approved"?"#CBEFB6":
          status==="Rejected"?"#F8CCC9":"rgb(209, 209, 248)",transition:"0.8s ease"}}>
            <p>{user.date}</p>
            <p>{user.email}</p>
            <p>{user.organization}</p>
            <p>{user.nodal_permit}</p>
            <NodalDropdown status={status} setStatus={setStatus}/>
        </div>
      )
  }
}
