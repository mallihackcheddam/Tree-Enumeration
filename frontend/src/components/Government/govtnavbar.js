
import React from 'react'
import {Link} from 'react-router-dom'
import "./govtnavbar.css"

export default function navbar() {
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
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item upload1">
          <Link to="/government/upload"><a class="nav-link" href="/">Upload</a></Link>
        </li>
        <li class="nav-item analy1">
          <Link to="/government/analytics"><a class="nav-link" href="/">Analytics</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
