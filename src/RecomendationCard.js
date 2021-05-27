import React,{Component} from "react";
import { render } from "react-dom";

class RecomendationCard extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      recommendations:[
        {
            id:1,
            name:"Random guy 1",
            company:"ABC company",
            designation:"CEO",
            message:"He is a good engineer",

        },
        {
            id:2,
            name:"Random guy 2",
            company:"ABC company",
            designation:"CEO",
            message:"She is a lazy person",

        },
        {
            id:3,
            name:"Random guy 3",
            company:"ABC company",
            designation:"CEO",
            message:"She is  an excelent developer",

        },
        {
            id:4,
            name:"Random guy 4",
            company:"ABC company",
            designation:"CEO",
            message:"She gets things done so early",

        },

    ],
    }
  }
  
  

    
    
  

  render()
  {
const { name, designation, company, message } = this.state.recommendations;
  return (
    <div className="col-12 col-md-4">
      <div className="card shadow h-100">
        <div className="card-body">
          <h4 className="card-text">{message}</h4>
          <p className="card-text text-secondary mb-0">{name}</p>
          <p className="card-text text-secondary">
            {designation} at {company}
          </p>
          <div className="column"><div onClick={()=>this.state.openAlert()} class="header card">
            {this.state}</div></div> 
        <div className="column"><div onClick={()=>this.state.openAlert()} class="header card">
        {this.state} </div></div>
        <div className="column"><div onClick={()=>this.state.openAlert()} class="header card">
       {this.state} </div></div>
        <div className="column"> <div onClick={()=>this.state.openAlert()} class="header card"> 
        {this.state} </div></div>
        </div>
      </div>
    </div>
  );
}}

export default RecomendationCard;
