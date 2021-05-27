import React from "react";
import TechC from "./TechC";
import {v4 as uuid} from "uuid";
import {Consumer} from "../context";

function Technology()
{
    return(
        
            <Consumer>
                {
                    value=>{   
                        const {Techs}=value;
                         const finalTechRow=[];
                        for(let i=0;i<Techs.length/4;i++)
                        {
                            let TechRow=Techs.slice(i*4,(i+1)*4);
                            finalTechRow.push(
                            <div key={uuid()} className="d-flex justify-content-around py-3">
                                    {
                                        TechRow.map((Tech) =>(
                                            <TechC key={uuid()} Tech={Tech}/>
                                           
                                        ))
                                        }
                                    </div>
                                    );
                                    
                        
                        }
                      return(
                        <div className="bg-light w-100">
                         <div className="container text-center py-5">
                         <h1 className="font-weight-light">
                         <span className="text-info">Technology</span> stack
                         </h1>
                         <div className="lead pb-5">
                             I design, develop and deliver with these weapons
                             </div>
                             {finalTechRow}
                         </div>
                        </div>
                            );
                        }
                        
                        
                    }
                
            </Consumer>
        
    );

                }


export default Technology;