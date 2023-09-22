import React, { useState } from 'react'
import Govtnavbar from './govtnavbar'
import './upload.css'



function Upload() {

    const [file, setfile] = useState(null);

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
            <Govtnavbar />
            <div class="mb-3">
                <label for="formFile" className="form-label">Default file input example</label>
                <input 
                onChange={(e)=>{
                    setfile(e.target.files[0]);
                }}  
                className="form-control" type="file" id="formFile" accept='.jpeg, .png, .jpg'/>
                <button
                onClick={()=>{handleSubmit()}}
                >
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