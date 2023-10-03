import React, { useState } from "react";
import "./upload.css";
import axios from "axios";
import UserNavbar from "./UserNavbar";
import "./upload.css";
import MapLocate from "../Government/MapLocate";
import { useLocation } from "react-router-dom";

function Upload() {

  const {state}  = useLocation();
  
  const {email} = state;
  console.log(email);

  const [file, setfile] = useState(null);
  const [location, setlocation] = useState("");

  console.log(location);
  const handleSubmit = () => {
    const formData = new FormData();
    //user email is in loc.email

    formData.append("file", file, file.name);
    formData.append("location", location);
    formData.append("email", email);

    axios.post("/upload", formData).then((data) => console.log(data));

    // const requestOptions = {

    //     method:"post",
    //     body:formData,
    // }
    // fetch("http://127.0.0.1:8000/upload", requestOptions)
    // .then((data)=>data.json())
    // .then((data)=>console.log(data))
  };

  return (
    <div className="govtupload">
      <UserNavbar />
      <div class="mb-3">
        <label for="formFile" className="form-label">
          Upload Image
        </label>
        <input
          onChange={(e) => {
            setfile(e.target.files[0]);
          }}
          className="form-control"
          type="file"
          id="formFile"
          accept=".jpeg, .png, .jpg"
        />
        <div>Select Location : {location}</div>
        <MapLocate setlocation={setlocation} />
        <button
          onClick={() => {
            handleSubmit();
          }}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
      <div className="results">
        <h1>Results</h1>
      </div>
    </div>
  );
}
export default Upload;
