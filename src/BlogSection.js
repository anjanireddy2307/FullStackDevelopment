import React from "react";
import BlogCard from "./BlogCard";
import {Consumer} from "../context";
import {Link} from "react-router-dom";

function BlogSection()
{
    {
        return(
            <Consumer>
        {
            (value)=>{
                const {Blogs}=value;
                return (
                    <div className="container text-center my-5">
             <h1 className="font-weight-light">My <span class="text-info">Blogs</span>
             </h1>
             <div className="lead">I build projects. Just like this website</div>
             
             <div className="row my-5 pt-3">
            {Blogs.slice(0,3).map((blog) => (
                <div key={blog.id} className="col-12 col-md-4 my-2">
                    <BlogCard blog={blog}/>
                </div>
            ))}
             </div>
             <div className="my-5">
             <Link to="/allBlogs" class="text-dark text-right">
             <h5> see my blogs <i class="fa fa-arrow-right allign-middle"></i></h5></Link>
             </div>
             </div>
                );
            }
            }
        
    </Consumer>
        );
        
    
    } 
}


export default BlogSection;