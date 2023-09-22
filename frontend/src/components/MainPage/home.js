import React from 'react'
import Navbar from './Navbar'
import './home.css'
import { Link ,useNavigate} from 'react-router-dom'
import Alert from './Alert'
import Dropdown from './Dropdown.js'
import { useState} from 'react'

export default function Home() {

  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSubmit = () => {

    const formData = new FormData();
  }
  return (
    <>
      <Navbar />
      <div className="info">
        <Alert />
      </div>
      <div className='body1'>

        <div className="left">
          <h1>Image Analytics for Tree Enumeration and Species Detection</h1>
        </div>
        <div className="right">
          <h2>Login</h2>
          <input onChange={(e)=>{
            setUsername(e.target.value);
          }} type="text" placeholder='Username' />
          <input onChange={(e)=>{
            setPassword(e.target.value);
          }} type="text" placeholder='Password' />
          <div className="sep">
            <Dropdown setRole={setRole} />
            <span>{role}</span>
          </div>
          <Link to="/userregister" style={{ textDecoration: 'none', color: "black" }}><p>Not a user?</p></Link>
            <button onClick={(e)=>{handleSubmit()}}
              // if(role==="UserAgency") navigate("/user/home");
              // else if(role==="NodalOfficer") navigate("/nodal/home");
              // else if(role==="GovernmentOfficial") navigate("/government/home");
             className='btn btn-primary'>Submit</button>
        </div>
      </div>
    </>
  )
}