import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm fixed-top bg-white">
        <div className="container my-2">
             <Link to="/" className="navbar-brand text-dark font-weight-bold">
              Anjani Reddy </Link>
            <Link to="/contactme" className="ml-auto mx-1">
              <button className="btn btn-outline-info ml-auto mx-1"> Contact me </button>
              </Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#collapseNav"> 
             <span className="fa fa-bars text-dark"></span>
            </button>
          <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
            <div className="navbar-nav">
             <a href="/" className="nav-item nav-link text-dark h6 mx-1">Projects</a>
             <a href="/" className="nav-item nav-link text-dark h6 mx-1">Blogs</a>
            </div>
          </div>
        </div>
    </nav>
    );
    }
    export default Navbar;

