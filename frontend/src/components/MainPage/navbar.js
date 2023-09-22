import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Prototype</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              
                <li class="nav-item c1">
                <Link to="/"><a class="nav-link active" aria-current="page" href="/">Home</a></Link>
                </li>
              
              
                <li class="nav-item c2">
                <Link to="/userregister"><a class="nav-link" href="/">UserAgency</a></Link>
                </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
