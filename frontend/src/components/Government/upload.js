import React, { useState } from "react";
import Govtnavbar from "./Govtnavbar";
import "./upload.css";
import axios from "axios";

function Upload() {
  const [file, setfile] = useState(null);

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("file", file, file.name);
    formData.append("location", "Alwal");
    formData.append("email", "abc@gmail.com");

    axios
      .post("http://127.0.0.1:8000/upload", formData)
      .then((data) => console.log(data));
  };

  return (
    <div className="govtupload">
      <Govtnavbar />
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Default file input example
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
        <button
          onClick={() => {
            handleSubmit();
          }}
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
