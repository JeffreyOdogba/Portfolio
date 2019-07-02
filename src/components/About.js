import React from 'react';
import "./main.css";
import AboutComponents from './aboutComponents';

class About extends React.Component{
    render(){
        return(
            <div className="container">
                <div style={{fontSize:"40px", textAlign:"center", padding:"40px", color:"Gray"}}>
                    About                    
                </div>
                <AboutComponents />
            </div>
        );
    }
        
}

export default About;