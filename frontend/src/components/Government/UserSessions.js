import React, {useState} from 'react'
import NodalNavbar from './Govtnavbar'
import Search from '../NodalOfficer/Search'
import '../NodalOfficer/UserLog.css'
import Log2Comp from './Log2Comp'

export default function UserLog() {

  const [role,setRole]=useState("Search by :");

  const orig = 
    {
      "date": "Date",
      "organization": "Organization",
      "noofspecies": "Species Count",
      "nooftrees":"Tree Count",
      "image":"Image"
    };

  const obj = [
    {
      "date": "21-9-2023",
      "organization": "XYZ",
      "noofspecies": "2",
      "nooftrees":"54",
      "image":"bold"
    },
    {
      "date": "23-9-2023",
      "organization": "PQR",
      "noofspecies": "1",
      "nooftrees":"27",
      "image":"bold"
    },
    {
      "date": "17-8-2023",
      "organization": "ABC",
      "noofspecies": "7",
      "nooftrees":"76",
      "image":"bold"
    }
  ]

  return (
    <div>
      <NodalNavbar/>
      <div className="log">
        <Search role={role} setRole={setRole}/>
      </div>
      <div className="list">
      <Log2Comp user = {orig} />
        {
            // Object.keys(obj).map((e,i)=>{
            //   return <LogComp index={i} obj={e}/>
            // })
            obj.map((user)=>{
              return <Log2Comp user = {user} />
            })

          // Object.keys(obj).map((e,i)=>{
          //   <LogComp key={i} {...e}/>
          // })
        }
        
      </div>
    </div>
  )
}
