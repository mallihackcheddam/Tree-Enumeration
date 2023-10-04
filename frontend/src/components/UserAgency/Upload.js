import React, { useState } from 'react'
import UserNavbar from './UserNavbar'
import './upload.css'
import MapLocate from '../Government/MapLocate'
import { useLocation } from 'react-router-dom'
import upload from '../../pics/upload.png'
import Log3Comp from './Log3Comp'
import axios from 'axios';


function Upload() {

    const [file, setfile] = useState(null);
    const [location, setlocation] = useState("");
    const [img, setImg] = useState({ upload });
    const [count,setCount]= useState(0);
    const {state}  = useLocation();
    const [response, setResponse] = useState(null);

  const {email} = state;
  const handleSubmit = () => {
    const formData = new FormData();
    //user email is in loc.email
  
    if(location==="")alert("Please choose a location");
    formData.append("file", file, file.name);
    formData.append("location", location);
    formData.append("email", email);

    axios.post("/upload", formData).then((data) => {
        setResponse(data.data)
    });
  };

    return (
        <div className="govtupload">
            <UserNavbar />
            <div className="totall">
                <div className="mb-3 totalmap">
                    <div className="leftmap">
                        <input
                            onChange={(e) => {
                                setfile(e.target.files[0]);
                                setImg(e.target.files[0]);
                            }}
                            className="" type="file" id="formFile" accept='.jpeg, .png, .jpg' />
                    </div>

                    <div style={{
                      width:'30vw',
                      height:'60vh',
                    }}>
                        <div
                        style={{

                        height:'20%',
                      overflow:'hidden',
                      textOveflow:'ellipsis', 
                      width:'inherit',
                        }}  
                        >Select Location : {location}</div>
                        <MapLocate setlocation={setlocation} />

                    </div>

                </div>
                <button
                    onClick={() => { handleSubmit() }}
                    className='btn btn-primary'>
                    Submit
                </button>
                <div className="results">
                    <h1>Results</h1>
                    <p>Total count : {response?response.total_count:0}</p>
                </div>
                <div
                style={{
                  width:'15%'
                }}
                >
                {/* <div
                style={{
                  marginBottom:4,
                  width:"200px",
                  height:"2px",
                  backgroundColor:"black",
                }}
                ></div> */}
                  {response?
                  response.species.map((val)=>{
                    return <>
                      <div 
                      style={{
                        display:'flex',
                        justifyContent:"space-around",
                      }}
                      >


                      <p>{val.name} : </p>
                      <p>{val.count}</p>

                      </div>
                    </>
                  })
                  :<></>}
                </div>
            </div>
        </div>
    )
  }
  export default Upload;
  
