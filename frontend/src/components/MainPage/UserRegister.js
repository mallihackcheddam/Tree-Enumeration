import React from 'react'
import Navbar from './Navbar'
import './register.css'

export default function Register() {
  return (
    <>
    <Navbar/>
    <div className='body'>
        <h2>User Agency</h2>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Organization'/>
        <input type="password" placeholder='Password'/>
        <input type="password" placeholder='Confirm Password'/>
        <input type="text" placeholder='Nodal Officer Permit ID'/>
        <button>Submit</button>
    </div>
    </>
  )
}
