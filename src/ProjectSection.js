import React from "react";
import ProjectCard from "./ProjectCard";
import {Consumer} from "../context";
import {Link} from "react-router-dom";

function ProjectSection()
{
    return(
        <Consumer>
    {
        (value)=>{
            const {Projects}=value;
            return (
                <div className="container text-center my-5">
         <h1 className="font-weight-light">My <span class="text-info">Projects</span>
         </h1>
         <div className="lead">I build projects. Just like this website</div>
         
         <div className="row my-5 pt-3">
        {Projects.slice(0,3).map((project) => (
            <div key={project.id} className="col-12 col-md-4 my-2">
                <ProjectCard project={project}/>
            </div>
        ))}
         </div>
         <div className="my-5">
         <Link to="/allProjects" class="text-dark text-right">
         <h5> see my projects <i class="fa fa-arrow-right allign-middle"></i></h5></Link>
         </div>
         </div>
            );
        }
        }
    
</Consumer>
    );
    

}



export default ProjectSection;