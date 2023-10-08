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
  const [img, setImg] = useState();
  const [count, setCount] = useState(0);
  const [response, setResponse] = useState(null);

  const { state } = useLocation();
  const { email } = state;

  const handleSubmit = () => {
    const formData = new FormData();
    //user email is in loc.email

    if (location === "") alert("Please choose a location");
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
            <div className="imageUploadBox">
              <h2>Select Image</h2>
              <input type="file" onChange={handleChange} id="formFile" accept='.jpeg, .png, .jpg' />
              <img height={"300vh"} width={"300vw"} src={img} />
            </div>
          </div>

          <div style={{
            width: '30vw',
            height: '60vh',
          }}>
            <div
              style={{

                height: '20%',
                overflow: 'hidden',
                textOveflow: 'ellipsis',
                width: 'inherit',
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
          <h1>{response ? "Results" : ""}</h1>
        </div>
        <div
          style={{
            width: '15%'
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
          <div>{response ? <div className='tablebro'><div>Name</div><div>Count</div></div> : <div></div>}</div>
          {response ?
            response.species.map((val) => {
              return <>
                <div className='tablebro'>
                  <div>{val.name}</div>
                  <div>{val.count}</div>
                </div>
              </>
            })
            : <></>}
          {response ? <p>Total count : {response ? response.total_count : 0}</p> : <></>}
        </div>

      </div>
    </div>
  )
}
export default Upload;

