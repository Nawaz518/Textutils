import React from 'react';
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
      <nav className= 'navbar navbar-expand-lg navbar-dark bg-dark'>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">TEXTAREA</a>
      <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <div className="nav-link active" aria-current="page" href="/">Home</div>
          </li>
           </ul>
           <div className='form-check form-switch text-light'>
  <input className="form-check-input" onClick={props.togglemod} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
</div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
</div>
  </nav>
    </div>
  );
}
