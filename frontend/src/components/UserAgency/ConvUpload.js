import React, { useState } from "react";
import './ConvUpload.css'
 
function AltUpload() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
 
    return (
        <div className="imageUploadBox">
            <h2>Select Image</h2>
            <input type="file" onChange={handleChange} />
            <img height={"300vh"} width={"300vw"} src={file} />
        </div>
 
    );
}
 
export default AltUpload;