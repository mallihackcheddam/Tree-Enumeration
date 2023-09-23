import React from 'react'
import UserNavbar from './UserNavbar'

export default function GovtHome() {
  return (
    <div>
        <UserNavbar/>
    <div className='govhome'>
    <h1>User Agency Official Page</h1>
        <div className='govbuttons'>
        <button>Upload</button>
        <button>Analytics</button>
        </div>
    </div>
    </div>
  )
}
