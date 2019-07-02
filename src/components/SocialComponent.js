import React from 'react';

const SocialComponent =()=>{
    return(
        <div>
            <hr />
      <div className="links-social">
        <a href="mailto:odogbajeffrey@gmail.com">
          {" "}
          <i className="fas fa-envelope fa-4x" />{" "}
        </a>
        <a href="https://github.com/JeffreyOdogba"  target="_blank" rel="noopener noreferrer">
          {" "}
          <i className="fab fa-github fa-4x" />{" "}
        </a>
        <a href="https://www.linkedin.com/in/jeffreyodogba/" target="_blank" rel="noopener noreferrer">
          {" "}
          <i className="fab fa-linkedin fa-4x" />{" "}
        </a>
      </div>
        </div>
    );
}

export default SocialComponent;

