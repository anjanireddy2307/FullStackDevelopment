import React from 'react'
import {Consumer} from "../context";
import BlogCard from "./BlogCard";

 function AllBlogs() {
    return (
        <Consumer>
        {
            (value)=>{
                const {Blogs}=value;
                return (
                    <div className="container text-center my-5">
                    <h1 className="font-weight-light py-5">
                        All my <span class="text-info">Blogs</span>
                    </h1>
                    
                    
                    <div className="row my-5 pt-3">
                   {Blogs.map((blog) => (
                       <div key={blog.id} className="col-12 col-md-6 py-3">
                           <BlogCard blog={blog}/>
                       </div>
                   ))}
                   </div>
                   </div>
                );
            }
        }
    </Consumer>
);}
export default AllBlogs;
