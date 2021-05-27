import React from "react";
import Nature from "../images/nature.jfif";

function Title(props){
  const {name , leadText}=props;
  //const name= "Anjani Reddy";
  //const leadText= "I am a student from India";
    return(
     <div className="container">
      <div className="row text-center align-items-center my-5 pt-5">
        <div className="col-12 col-md-6">
         <img className="image-fluid rounded-circle" 
         src={Nature}
          alt="anjani"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
        <div className="font-weight-light" style={{fontSize:"50px" }}>
        Hi, I am <span class="text-info"> {name}</span>
        </div>
        <h4 className="font-weight-light">{leadText}</h4>
        </div>
       </div>
     </div>
    );
}

export default Title;