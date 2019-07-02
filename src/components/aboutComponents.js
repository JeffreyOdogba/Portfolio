import React from "react";

import aboutImage from "../image/aboutImage.JPG";

import FooterName from "./footer";

class AboutComponents extends React.Component {
  render() {
    return (
      <div>
        <span role="img" alt="img" aria-label="okay">
          ✨
        </span>{" "}
        <b style={{ fontSize: "20px" }}> Software Dev </b>
        <div className="about-Photo-Edit">
          <img src={aboutImage} alt={aboutImage} />
          <div className="about-me-details">
            <p>
              Hi, I am Jeffrey, a Front-end(React) and Back-end (C#) Developer
              from Canada. I started my Dev journey 6 years ago. I majored in
              Information Technology at the University of Ghana and worked as a
              web editor Intern in Ghana Broadcasting Network.
            </p>
            <p>
              After my previous profession experience, I tried besting at my
              hobby which was bodybuliding sport, and I am glad I won couple of
              bodybuliding competitions in Toronto.
            </p>
            <p>
              Recently, I studied Software Engineering at Sheridan College. By
              focusing and enhancing my knowledge once again. I regain my skills
              and increased learning which has brought me this far and still
              improving on my skills.
            </p>
            <p>
              In a world of changes and everything been accessible with just a
              click, Programming has made us masters of controlling and making
              Objects seems more realistic and define the word "Everything is
              Possible". IT is the new World and I have no doubt that it makes
              the world a faster and better!.
            </p>
            <p>if you want to know more about me, feel free to contact me!</p>
            <p />
            <p/>
            <b />
          </div>
        </div>
        <FooterName />
      </div>
    );
  }
}

export default AboutComponents;
