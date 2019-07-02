import React from "react";
import "./main.css";



const PortfolioCards = props => {
  return (
    <div>
        <div class="ui cards" style={{padding:'10px'}}>
          <div class="card">
            <div class="image">
              <img src={props.images} alt={props.images} />
            </div>
            <div class="content">
              <div class="header">{props.projectname}</div>
              <div class="meta">
                <a>{props.projectname}</a>
              </div>
              <div class="description">{props.desc}</div>
            </div>
            <div class="extra content">
              <span class="right floated">{props.date}</span>
            </div>
          </div>          
        </div>        
    </div>
  );
};

export default PortfolioCards;
