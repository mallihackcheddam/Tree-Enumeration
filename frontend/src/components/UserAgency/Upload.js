import React, { useState } from 'react'
import UserNavbar from './UserNavbar'
import './upload.css'
import MapLocate from '../Government/MapLocate'
import { useLocation } from 'react-router-dom'
import upload from '../../pics/upload.png'
import Log3Comp from './Log3Comp'
import AltUpload from './ConvUpload.js'


function Upload() {

    const [file, setfile] = useState(null);
    const [location, setlocation] = useState("");
    const [img, setImg] = useState({ upload });
    const [count,setCount]= useState(0);
    //user email is in loc.email

    const databro = {'total_count': 76, 'species': [{'name': 'Coconut', 'count': 100}]};

    const handleSubmit = () => {

        const formData = new FormData();
        setCount(databro.total_count);

        // formData.append("file", file, file.name)

        // const requestOptions = {

        //     method: "post",
        //     body: formData,
        // }
        // fetch("http://127.0.0.1:8000/upload", requestOptions)
        //     .then((data) => data.json())
        //     .then((data) => console.log(data))

    }

    function resultChange(){
        
    }

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