import React from 'react'
import Navbar from './navbar'
import './home.css'

export default function home() {
  return (
    <>
    <Navbar/>
    <div className='body1'>
        <div className="left">
        <h1>Image Analytics for Tree Enumeration and Species Detection</h1>
        </div>
        <div className="right">
          <h2>Login</h2>
          <input type="text" placeholder='Username'/>
          <input type="text" placeholder='Password'/>
          <p>Not a user?</p>
          <button>Submit</button>
        </div>
    </div>
    </>
  )}
