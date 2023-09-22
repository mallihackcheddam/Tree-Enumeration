import React from 'react'
import Navbar from './Navbar'
import './home.css'
import {Link} from 'react-router-dom'

export default function Home() {
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
          <Link to="/government/upload">
          <button>Submit</button>
          </Link>
        </div>
    </div>
    </>
  )}
