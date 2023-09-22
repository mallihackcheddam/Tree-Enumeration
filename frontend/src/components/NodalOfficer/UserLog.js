import React, {useState} from 'react'
import NodalNavbar from './NodalNavbar'
import Search from './Search'
import './UserLog.css'
import LogComp from './LogComp'

export default function UserLog() {

  const [role,setRole]=useState("Search by :");

  const orig = 
    {
      "date": "Date",
      "username": "Username",
      "organization": "Organization",
      "nodal_permit": "ID",
      "status":"Status",
      "edhokati":"bold"
    };

  const obj = [
    {
      "date": "2023-09-23",
      "username": "john_doe",
      "organization": "ABC Inc.",
      "nodal_permit": 12345,
      "status":"Pending"
    },
    {
      "date": "2023-09-22",
      "username": "jane_smith",
      "organization": "XYZ Corp.",
      "nodal_permit": 67890,
      "status":"Approved"
    },
    {
      "date": "2023-09-21",
      "username": "bob_jenkins",
      "organization": "123 Industries",
      "nodal_permit": 54321,
      "status":"Pending"
    }
  ]

  return (
    <div>
      <NodalNavbar/>
      <div className="log">
        <Search role={role} setRole={setRole}/>
      </div>
      <div className="list">
      <LogComp user = {orig} />
        {
            // Object.keys(obj).map((e,i)=>{
            //   return <LogComp index={i} obj={e}/>
            // })
            obj.map((user)=>{
              return <LogComp user = {user} />
            })

          // Object.keys(obj).map((e,i)=>{
          //   <LogComp key={i} {...e}/>
          // })
        }
        
      </div>
    </div>
  )
}
