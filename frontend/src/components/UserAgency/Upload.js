import React, { useState } from 'react'
import UserNavbar from './UserNavbar'
import './upload.css'
import MapLocate from '../Government/MapLocate'
import { useLocation } from 'react-router-dom'
import upload from '../../pics/upload.png'
import Log3Comp from './Log3Comp'
import axios from 'axios';
import AltUpload from './ConvUpload.js'


function Upload() {

    const [file, setfile] = useState(null);
    const [location, setlocation] = useState("");
    const [img, setImg] = useState({ upload });
    const [count,setCount]= useState(0);
    const {state}  = useLocation();
  
  const {email} = state;
  const handleSubmit = () => {
    const formData = new FormData();
    //user email is in loc.email

    formData.append("file", file, file.name);
    formData.append("location", location);
    formData.append("email", email);

    axios.post("/upload", formData).then((data) => console.log(data));
  };

    return (
        <div className="govtupload">
            <UserNavbar />
            <div className="totall">
                <div className="mb-3 totalmap">
                    <div className="leftmap">
                        {/* <input
                            onChange={(e) => {
                                setfile(e.target.files[0]);
                                setImg(e.target.files[0]);
                            }}
                            className="" type="file" id="formFile" accept='.jpeg, .png, .jpg' /> */}
                        <AltUpload/>
                    </div>

                    <div className="rightmap">
                        <h2>Location</h2>
                        <div>{location}</div>
                        <MapLocate setlocation={setlocation} />

                    </div>

                </div>
                <button
                    onClick={() => { handleSubmit() }}
                    className='btn btn-primary'>
                    Submit
                </button>
                <p>------------------------------------------------------------------------</p>
                <div className="results">
                    <h1>Results</h1>
                    <p>Total count : {count}</p>
                </div>
            </div>
        </div>
    )
  }
  export default Upload;
  
