import React from "react";

class ResumePage extends React.Component {
  render() {
    return (
      <div id="resume" className="resumePage__Main">
        <section className="resumePage__Link">
          <p className="resumePage__paragraph">Download Resume</p>
          <a href="https://drive.google.com/file/d/1IMdPjJM4IuzIvi2WBAl0sB9rzeOtbdmX/view?usp=sharing">
            <i class="fas fa-file-download"></i>
          </a>
        </section>
        <br />
        <img
          id="resumePage__resume"
          src={require("../assets/LiShan.jpg")}
          alt="Resume"
        />
      </div>
    );
  }
}
export default ResumePage;
