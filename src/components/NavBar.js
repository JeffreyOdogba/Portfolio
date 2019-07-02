import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import pdf from '../resume/resumejeffrey.pdf';


class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar justify-content-between">
          <Link to="/" className="navbar-brand btn active">
            <b>{this.props.myname}</b>
          </Link>
          <form className="form-inline">
            <Link to="/Category" className="btn active" aria-pressed="true">
              Portfolio
            </Link>
            <Link to="/About" className="btn active" aria-pressed="true">
              About
            </Link>
          <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn active">
              Resume
            </a>

            
          </form>
        </nav>
      </div>
    );
  }
}

export default NavBar;
