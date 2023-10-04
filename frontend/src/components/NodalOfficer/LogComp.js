import React, { useEffect, useState } from "react";
import "./LogComp.css";
import NodalDropdown from "./NodalDropdown";
import { useLocation } from "react-router-dom";

export default function LogComp({ user, wait, setwait }) {

  const [color, setColor] = useState("rgb(209, 209, 248)");
  const [status, setStatus] = useState(user.status);

  const loc = useLocation(); 



  if (user.edhokati === "bold") {
    return (
      <div className="listbro" style={{ backgroundColor: "#CACBCE" }}>
        <p>
          <strong>{user.email}</strong>
        </p>
        <p>
          <strong>{user.organization}</strong>
        </p>
        <p>
          <strong>{user.nodal_id}</strong>
        </p>
        <p>
          <strong>{user.status}</strong>
        </p>
      </div>
    );
  } else {
    return (
      <div

        className="listbro"
        style={{
          backgroundColor:
            status === "Approved"
              ? "#CBEFB6"
              : status === "Rejected"
              ? "#F8CCC9"
              : "rgb(209, 209, 248)",
        }}
      >
        <p>{user.email}</p>
        <p>{user.organization}</p>
        <p>{user.nodal_id}</p>
        <NodalDropdown 
        setwait = {setwait}
        email = {user.email}
        status={status}
        setStatus={setStatus} />
      </div>
    );
  }
}
