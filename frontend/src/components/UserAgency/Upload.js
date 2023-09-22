import React, { useState } from 'react'
import UserNavbar from './UserNavbar'
import './upload.css'
import MapLocate from '../Government/MapLocate'
import { useLocation } from 'react-router-dom'


function Upload() {

    const [file, setfile] = useState(null);
    const [location, setlocation] =useState("");
    const [email,setEmail] =useState("");
    const loc=useLocation();
    setEmail(loc.email);

    const handleSubmit = () =>{

        const formData = new FormData();
        
        formData.append("file", file, file.name)

        const requestOptions = {

            method:"post",
            body:formData,
        }
        fetch("http://127.0.0.1:8000/upload", requestOptions)
        .then((data)=>data.json())
        .then((data)=>console.log(data))

    }


    return (
        <div className="govtupload">
            <UserNavbar />
            <div class="mb-3">
                <label for="formFile" className="form-label">Upload Image</label>
                <input 
                onChange={(e)=>{
                    setfile(e.target.files[0]);
                }}  
                className="form-control" type="file" id="formFile" accept='.jpeg, .png, .jpg'/>
                <div>Select Location : {location}</div>
                <MapLocate setlocation={setlocation}/>
                <button
                onClick={()=>{handleSubmit()}}
                className='btn btn-primary'>
                    Submit
                </button>
            </div>
            <div className="results">
                <h1>Results</h1>
            </div>
        </div>
    )
}

export default Upload;