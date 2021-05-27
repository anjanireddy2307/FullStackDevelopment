import React from "react";
import {Link} from "react-router-dom";
function Footer(){
    return(
        <footer>
 <div className="container-fluid text-center" style={{backgroundColor:"black"}}>
 <div className="row py-5">
 <div className="col-12">
 <h2 className="text-light">Intrested in working with me?</h2>
 <Link to="/contact">
 <button className="btn btn-outline-light btn-md">Let's talk</button>
 </Link>
 </div>
 </div>
 <div className="row ">
 <div className="col-12 col-md-4 py-3">
 <h5 className="text-info">More Links</h5>
<a href="/" className="text-light d-block">Blogs</a>
<Link to="/" className="text-light d-block">Home</Link>
<a href="/" className="text-light d-block">Projects</a>
<Link to="/contactme" className="text-light d-block">Contact</Link>
<Link to="/write-a-recommendation" className="text-light">
write a Recommendation<i className="fa fa-heart text-light"></i>
</Link>
</div>
<div className="col-12 col-md-4 text-light text-justify py-3">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum dolore eu fugiat 
nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est laborum. 
Curabitur pretium tincidunt lacus nulla gravida orci a odio sit 
aliquip ut nullam.
</p>
</div>
<div className="col-12 col-md-4 py-3">
<h5 className="text-info">Social</h5>
<a href="#"><i className="fa fa-linkedin-square text-light h1 d-block"></i></a>
<a href="#"><i className="fa fa-github text-light h1 d-block"></i></a>
<a href="#"><i className="fa fa-youtube-square text-light h1 d-block"></i></a>
</div>
</div>
<div className="row">
<div className="col-12 text-muted">
<h7>Copyright © Anjani Reddy 2020</h7>
</div>
</div>
</div>
 </footer>
    );
}
export default Footer;