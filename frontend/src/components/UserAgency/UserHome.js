import React, { useState } from 'react'
import UserNavbar from './UserNavbar'
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';

export default function GovtHome() {


  const {email} = useContext(UserContext);
  // console.log(state);

  return (
    <div>
        <UserNavbar email = {email} />
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
