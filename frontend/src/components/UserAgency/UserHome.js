import React from 'react'
import UserNavbar from './UserNavbar'
import { useLocation } from 'react-router-dom';

export default function GovtHome() {

  const { state } = useLocation();
  console.log(state);

  return (
    <div>
        <UserNavbar email = {state.email} />
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
