import React from 'react';
import PortfolioComponent from './CategoryComponent';

import beer from '../image/beer1.PNG';
import clm from '../image/clm1.PNG';
import flex from '../image/flexmember.PNG';
import chill from '../image/chillcrib.PNG';
import FooterName from "./footer";

import { Link } from "react-router-dom";

class Category extends React.Component{
    render(){

        return(            
            <div className="container">
                <div style={{fontSize:"40px", textAlign:"center", padding:"40px", color:"Gray"}}>
                    Portfolio                    
                </div>
                <div class="ui link cards">
                <Link to="/BeerStore">
                <PortfolioComponent projectname="Beer Store" images={beer} desc="Team project from College" date="October 2018"/>
                </Link>
                

                <Link to="/ClmBookingSystem">
                <PortfolioComponent projectname="Appointment System" images={clm} desc="This is a Free-Lence project done foe a Non-Profiting Organiztion..." date="April 2019"/>
                </Link>               

                <Link to="/FlexiLearn">
                <PortfolioComponent projectname="FlexiLearn" images={flex} desc="Project for memebers register for courses e.g Udemy or Lynda" date="October 2018"/>
                </Link>

                <Link to="/">
                <PortfolioComponent projectname="ChillCrib" images={chill} desc="Personal Project: Put on hold for reconstruction" date="UNDER CONSTRUCTION"/>
                </Link>
                
                </div>
                <FooterName />
            </div>
        );
    }
}
export default Category;