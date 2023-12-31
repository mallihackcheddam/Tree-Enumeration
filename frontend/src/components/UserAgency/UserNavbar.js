
import React from 'react'
import {Link} from 'react-router-dom'

export default function navbar({email}) {
  console.log("unn"+email)
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">User Agency</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item c1">
          <Link to="/user/home"><a class="nav-link active" aria-current="page" href="/">Home</a></Link>
        </li>
        <li class="nav-item c1">
          <Link state={{ email :  email}} to="/user/upload"><a class="nav-link" href="/">Upload</a></Link>
        </li>
        <li class="nav-item c1">
          <Link state={{ email :  email}} to="/user/analytics"><a class="nav-link" href="/">Analytics</a></Link>
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
