import React from "react";
import Navbar from "./Navbar";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";
import Dropdown from "./Dropdown.js";
import { useState } from "react";
import axios from "axios";
import { containsNumber } from "@turf/turf";

export default function Home() {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //     role: role,
    //   }),
    // };

    const requestOptions = {
      email: email,
      password: password,
      role: role,
    };
    axios
      .post("http://127.0.0.1:8000/login", requestOptions)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navbar />
      <div className="info">
        <Alert />
      </div>
      <div className="body1">
        <div className="left">
          <h1>Image Analytics for Tree Enumeration and Species Detection</h1>
        </div>
        <div className="right">
          <h2>Login</h2>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            placeholder="Password"
          />
          <div className="sep">
            <Dropdown setRole={setRole} />
            <span>{role}</span>
          </div>
          <Link
            to="/userregister"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p>Not a user?</p>
          </Link>
          {/* <button onClick={(e) => { handleSubmit() }} */}
          <button
            onClick={(e) => {
              handleSubmit();
              // if (role === "UserAgency") {
              //   navigate("/user/home");
              //   // navigate("/useragency/upload",email);
              // } else if (role === "NodalOfficer") {
              //   navigate("/nodal/home");
              //   // navigate("/nodal/usercheck",email);
              // } else if (role === "GovernmentOfficial")
              //   navigate("/government/home");
            }}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
