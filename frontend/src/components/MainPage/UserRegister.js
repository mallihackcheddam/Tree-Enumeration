import React, { useState } from 'react'
import Navbar from './Navbar'
import './register.css'
import axios from 'axios';

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setid] = useState("");
  const [org, setorg] = useState("");

  const submit = async () => {

    try {

      let response = await axios.post("/useragency_signup",
        {
          organization: org,
          email: email,
          password: password,
          nodal_id: id,
        })
      alert("Account created")
    }
    catch (error) {
      alert("Internal Server Error")
    }

  }


  return (
    <>
      <Navbar />
      <div className='body'>
        <h2>User Agency</h2>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email" placeholder='Email' />
        <input
          onChange={(e) => {
            setorg(e.target.value);
          }}
          type="text" placeholder='Organization' />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm Password' />
        <input
          onChange={(e) => {
            setid(e.target.value);
          }}
          type="text" placeholder='Nodal Officer Permit ID' />
        <button
          onClick={() => {
            submit();
          }}
        >Submit</button>
      </div>
    </>
  )
}
