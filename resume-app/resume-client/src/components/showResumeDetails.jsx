import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: {},
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/resumes/" + this.props.match.params.email)
      .then((res) => {
        this.setState({
          resume: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowResumeDetails");
      });
  }

  render() {
    const resume = this.state.resume;
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="pull-left">
            <a href={resume.github} className="btn btn-primary m-2">
              Github
            </a>
            <a href={resume.linkedin} className="btn btn-primary">
              LinkedIn
            </a>
          </div>
        </nav>

        <h1> Welcome to my resume : {resume.email}</h1>
        <p>Some static Bio about me</p>
      </div>
    );
  }
}

export default Resume;
