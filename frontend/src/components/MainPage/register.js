import React from 'react'
import Navbar from './Navbar'
import './register.css'

export default function Register() {
  return (
    <>
    <Navbar/>
    <div className='body'>
        <h2>Register</h2>
        <input type="text" placeholder='Username'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Password'/>
        <input type="text" placeholder='Confirm Password'/>
        <button>Submit</button>
    </div>
    </>
  )
}
