import React, { useState } from 'react'
import NodalNavbar from './NodalNavbar'
import Search from './Search'
import './UserLog.css'
import LogComp from './LogComp'
import { useEffect } from 'react'

export default function UserLog() {

  const [users, setusers] = useState([]);
  const [role, setRole] = useState("Search by :");
  const [wait, setwait] = useState(false);

  useEffect(() => {
    fetch("/pending_users")
      .then((data) => data.json())
      .then((data) => setusers(data));
  }, []);

  const orig =
  {
    "date": "Date",
    "email": "Email",
    "organization": "Organization",
    "nodal_permit": "ID",
    "status": "Status",
    "edhokati": "bold"
  };


  return (
    <div
      style={{
        pointerEvents: wait ? 'none' : 'all'
      }}
    >
      <NodalNavbar />
      <div className="log">
        <Search role={role} setRole={setRole} />
      </div>
      <div className="list">
        <LogComp
          user={orig}/>
        {
          users.length > 0 ? users.map((user) => {
            return <LogComp
              wait={wait}
              setwait={setwait}
              user={user} />
          }) : <></>
        }

      </div>
      <p
      style={{
        textAlign: 'center',
      }}
      >{wait?"Please wait while the changes are reflected in db":<></>}</p>
    </div>
  )
}
