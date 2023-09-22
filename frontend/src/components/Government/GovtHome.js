import React from 'react'
import Govtnavbar from './Govtnavbar'
import './GovtHome.css'

export default function GovtHome() {
  return (
    <div>
        <Govtnavbar/>
    <div className='govhome'>
        <h1>Government Official Page</h1>
        <div className='govbuttons'>
        <button>Analytics</button>
        <button>Action Log</button>
        </div>
    </div>
    </div>
  )
}
