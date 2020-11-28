import React from "react";
import "./WorkPage.css";
import avatar from "../avatar.jpeg";

function WorkPage() {
  const links = {
    email: "mailto:lishan1512@gmail.com",
    linkedin: "http://www.linkedin.com/in/li-shan-ho",
    github: "https://github.com/nahsiloh",
  };

  return (
    <div id="workPage" className="workPage__main">
      <section className="workPage__intro">
        <h2>Work</h2>
        <h3>
          I’m currently working as a Software Developer at Emporio Analytics,
          where we support brands and empower small retail businesses in South
          East Asia through the power of data analytics.
        </h3>
        <h3>
          In my previous life, I worked as a Architect, with a focus on civic
          buildings namely educational institutions and nursing homes.
        </h3>
        <h3>
          Through my passion for design and technology, I seek to build ideas
          and products that bring communities together.
        </h3>
        <section className="workPage__links">
          {Object.keys(links).map((link) => {
            return (
              <a href={links[link]}>
                <img src={require(`../assets/svg/${link}.svg`)} />
              </a>
            );
          })}
        </section>
      </section>
      <section className="workPage_resume">
        <img
          id="resumePage__resume"
          src={require("../assets/LiShan.jpg")}
          alt="Resume"
        />
        <a href="https://drive.google.com/file/d/1IMdPjJM4IuzIvi2WBAl0sB9rzeOtbdmX/view?usp=sharing">
          <h3>DOWNLOAD RESUME</h3>
        </a>
      </section>
    </div>
  );
}

export default WorkPage;
