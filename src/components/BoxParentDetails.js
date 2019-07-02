import React from 'react';
import "./main.css";

const BoxParentDetails = props => {

    return (
      <div className="container">
          <br/>
        <div>
          <h2>{props.project_title}</h2> 
          <br/>
        </div>

        <div>
            <a href={props.link_Porfolio} target="_blank" rel="noopener noreferrer"> <b style={{fontSize:'20px'}}>  {props.link_Name} </b> </a>
        </div>

        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src={props.projectImage1} alt="Cardimg" />
            <div className="card-body">
              <h5 className="card-title">{props.Page_Name}</h5>
              <div style={{fontSize:'19px', textAlign:'center'}}>
          <p>{props.description}</p>
        </div> 
            </div>
          </div>
          
        </div>

        
            

      </div>
    );
  };

  export default BoxParentDetails;