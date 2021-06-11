import React, { Component } from "react";
import axios from "axios";
import ResumeCard from "./resumeCard";

class ResumeCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumes: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/resumes/")
      .then((res) => {
        this.setState({
          resumes: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowResumeList");
      });
  }

  render() {
    const resumes = this.state.resumes;
    let resumeList;
    if (!resumes) {
      console.log("There are no resumes");
    } else {
      resumeList = resumes.map((r) => <ResumeCard resume={r} key={r.email} />);
    }

    return (
      <div>
        <div>
          <h1> Displaying Resume Cards</h1>
        </div>
        <div className="list">{resumeList}</div>
      </div>
    );
  }
}

export default ResumeCards;
