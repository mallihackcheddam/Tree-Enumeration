
import React from 'react'
import {Link} from 'react-router-dom'
import "./govtnavbar.css"

export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Government Official</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item c1">
          <Link to="/government/home"><a className="nav-link active" aria-current="page" href="/">Home</a></Link>
        </li>
        <li className="nav-item c1">
          <Link to="/government/analytics"><a className="nav-link" href="/">Analytics</a></Link>
        </li>
        <li class="nav-item c1">
          <Link to="/government/usersessions"><a class="nav-link" href="/">Sessions</a></Link>
        </li>
        <li class="nav-item c1">
          <Link to="/"><a class="nav-link" href="/">Logout</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
)
}
