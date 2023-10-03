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
      "email": "Email",
      "organization": "Organization",
      "nodal_permit": "ID",
      "status":"Status",
      "edhokati":"bold"
    };

  const obj = [
    {
      "date": "2023-09-23",
      "email": "john_doe@gmail.com",
      "organization": "ABC Inc.",
      "nodal_permit": 12345,
      "status":"Pending"
    },
    {
      "date": "2023-09-22",
      "email": "jane_smith@email.com",
      "organization": "XYZ Corp.",
      "nodal_permit": 67890,
      "status":"Approved"
    },
    {
      "date": "2023-09-21",
      "email": "bob_jenkins@gmail.com",
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
