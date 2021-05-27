import React from "react";
import Aboutme from "./Aboutme";
import Title from "./Title";
import ProjectSection from "./ProjectSection";
import BlogSection from "./BlogSection";
import Technology from "./Technology";
import RecomendationSection from "./RecomendationSection";

function HomePage(){
    return(
        <div>
     < Title name="Anjani Reddy" leadText="Iam an engineer from India"/> 
    <RecomendationSection />
    < Technology />
    < ProjectSection />
    < Aboutme />
    < BlogSection />
        </div>

    
    );
}

export default HomePage;