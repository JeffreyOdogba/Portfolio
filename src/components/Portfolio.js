import React from "react";
import "./main.css";
import profileImage from '../image/me.png';
import FooterName from "./footer";


const name = {
  myname: "Jeffrey Odogba",
  position:"Front-end(React) and Back-end (C#) Developer",
  photo: profileImage
}

//const task = "Software Developer";


const BackImage = props => {
  return (    
    <div>
      
      <div className="edit-name">{name.myname}</div>
      <div className="edit-position">{name.position}</div>
      <div className="photo-Container">
        <img alt={name.myname} className="photoedit" src={name.photo} />
      </div>

      <br />
      <br />
      <br />
      <br />
      <FooterName/>
    </div>
  );
};

export default BackImage;
