import React from "react";
import RecomendationCard from "./RecomendationCard";
import {v4 as uuid} from "uuid";
import {Consumer} from "../context";

function RecomendationSection(){
    return (
    <Consumer>
        {
            value=>{
                const{recommendations}=value;
                
    return(
        <div class="container-fluid my-5">
 <div class="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
     {
         recommendations.map((recommendation)=> (
             <RecomendationCard key={uuid()} recommendation={recommendation}/>
         ))
     }

 </div>
 </div>
    );
            }
        }
    </Consumer>
    
    );
}

export default RecomendationSection;