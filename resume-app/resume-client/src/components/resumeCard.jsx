import React, { Component } from "react";
import { Link } from "react-router-dom";

class ResumeCard extends Component {
  render() {
    const { resume } = this.props;
    return (
      <div className="card-container">
        <Link to={`/show-resume/${resume.email}/`}>Click on me</Link>
        <div className="desc">
          <p>Email: {resume.email}</p>
          <h3>
            <a href={resume.github}>Github</a>
            <br></br>
            <a href={resume.linkedin}>LinkedIn</a>
          </h3>
        </div>
      </div>
    );
  }
}

export default ResumeCard;
