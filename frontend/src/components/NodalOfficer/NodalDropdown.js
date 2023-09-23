import React from 'react'

export default function dropdown(props) {
    return (
        <div>
            <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.status}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a onClick={(e)=>{
                    props.setStatus("Approved");
                    
                }}class="dropdown-item" href="#">Approved</a></li>
                    <li><a onClick={(e)=>{
                    props.setStatus("Rejected")
                }}class="dropdown-item" href="#">Rejected</a></li>
                    <li><a onClick={(e)=>{
                    props.setStatus("Pending")
                }}class="dropdown-item" href="#">Pending</a></li>
                </ul>
            </div>
        </div>
    )
}
