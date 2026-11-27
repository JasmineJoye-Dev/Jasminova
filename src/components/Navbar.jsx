import React from 'react'
export default function Navbar(props) {
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
      <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">MENU</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
     <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item px-3">
        <a className="nav-link "  href="#">HOME</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link " href="#">PAGES</a>
        </li>
         <li className="nav-item px-3">
          <a className="nav-link " href="#">SHOP</a>
        </li>
        
          <li className="nav-item px-3">  
          <a className="nav-link " href="#">PORTFOLIO</a>
        </li>
       <li className="nav-item px-3">
          <a className="nav-link " href="#">BLOG</a>
        </li>
         <li className="nav-item px-3">
          <a className="nav-link " href="#">ELEMENTS</a>
        </li>
      </ul>
  </div>
     
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>


  )
}
