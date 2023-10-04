/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios';

export default function dropdown({ status, setwait, setStatus, email }) {

    return (
        <div>
            <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {status}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a onClick={() => {
                        
                        setwait(true);
                        axios.post('/nodal_status', {
                            "nodal_name": "John",
                            "user_email": email,
                            "status": "Approved",
                        })
                            .then(() => {
                                setwait(false);
                                setStatus("Approved");
                            })

                    }} class="dropdown-item" href="#">Approved</a></li>

                    <li>
                        <a
                            onClick={() => {
                                
                                setwait(true);
                                axios.post('/nodal_status', {
                                    "nodal_name": "John",
                                    "user_email": email,
                                    "status": "Rejected",
                                })
                                    .then(() => {
                                        setwait(false);
                                        setStatus("Rejected");
                                    })
                            }}
                            class="dropdown-item" href="#">Rejected
                        </a>
                    </li>

                    <li>
                        <a
                        
                        onClick={() => {
                                
                                setwait(true);
                                axios.post('/nodal_status', {
                                    "nodal_name": "John",
                                    "user_email": email,
                                    "status": "Pending",
                                })
                                    .then(() => {
                                        setwait(false);
                                        setStatus("Pending");
                                    })
                            }}
                        class="dropdown-item" href="#">Pending</a></li>
                </ul>
            </div>
        </div>
    )
}
