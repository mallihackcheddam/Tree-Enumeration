import React from 'react'

export default function Search(props) {
    return (
        <div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                <div class="dropdown">
                <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.role}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a onClick={(e)=>{
                    props.setRole("Search by : Username");
                }}class="dropdown-item" href="#">Username</a></li>
                    <li><a onClick={(e)=>{
                    props.setRole("Search by : Date")
                }}class="dropdown-item" href="#">Date</a></li>
                    <li><a onClick={(e)=>{
                    props.setRole("Search by : Organization")
                }}class="dropdown-item" href="#">Organization</a></li>
                </ul>
            </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with dropdown button" />
            </div>
        </div>
    )
}
