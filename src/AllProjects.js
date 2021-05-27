import React from 'react'
import {Consumer} from "../context";
import ProjectCard from "./ProjectCard";

 function AllProjects() {
    return (
    <Consumer>
        {
            (value)=>{
                const {Projects}=value;
                return (
                    <div className="container text-center my-5">
                    <h1 className="font-weight-light py-5">
                        All my <span class="text-info">Projects</span>
                    </h1>
                    
                    
                    <div className="row my-5 pt-3">
                   {Projects.map((project) => (
                       <div key={project.id} className="col-12 col-md-6 py-3">
                           <ProjectCard project={project}/>
                       </div>
                   ))}
                   </div>
                   </div>
                );
            }
        }
    </Consumer>
);}
export default AllProjects;
