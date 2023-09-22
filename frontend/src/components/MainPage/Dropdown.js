import React from 'react'

export default function dropdown({setRole}) {
    return (
        <div>
            <div class="dropdown">
                <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Role
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a onClick={(e)=>{
                    setRole("UserAgency");
                }}class="dropdown-item" href="#">User Agency</a></li>
                    <li><a onClick={(e)=>{
                    setRole("GovernmentOfficial")
                }}class="dropdown-item" href="#">Government Official</a></li>
                    <li><a onClick={(e)=>{
                    setRole("NodalOfficer")
                }}class="dropdown-item" href="#">Nodal Officer</a></li>
                </ul>
            </div>
        </div>
    )
}
