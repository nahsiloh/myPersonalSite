import React from "react";
import "./HomePage.css";
import avatar from "../avatar.jpeg";

function HomePage() {
  return (
    <div className="homePage__main">
      <section id="homePage__title">
        <h1>Hell</h1>
        <img id="homePage__avatar" src={avatar} alt="o" />
      </section>
      <h2>I'm Li Shan</h2>
      <h3>Architect turned Software Developer.</h3>
      <h3>I value design and enjoy the process of creating things.</h3>
      <section className="homePage__links">
        <a href="mailto:lishan1512@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a className="homepage__iconLinks" href="https://github.com/nahsiloh">
          <i className="fab fa-github"></i>
        </a>
      </section>
    </div>
  );
}

export default HomePage;
