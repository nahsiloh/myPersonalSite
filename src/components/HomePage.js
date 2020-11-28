import React from "react";
import "./HomePage.css";
import avatar from "../avatar.jpeg";

function HomePage() {
  const links = {
    email: "mailto:lishan1512@gmail.com",
    linkedin: "http://www.linkedin.com/in/li-shan-ho",
    github: "https://github.com/nahsiloh",
  };

  return (
    <div id="homePage" className="homePage__main">
      <section id="homePage__title">
        <h1>Hell</h1>
        <img id="homePage__avatar" src={avatar} alt="o" />
      </section>
      <h2>I'm Li Shan</h2>
      <section className="homePage__intro">
        <h3>Architect turned Software Developer.</h3>
        <h3>I value design and enjoy the process of creating things.</h3>
      </section>
      <section className="homePage__links">
        {Object.keys(links).map((link) => {
          return (
            <a href={links[link]}>
              <img src={require(`../assets/svg/${link}.svg`)} />
            </a>
          );
        })}
      </section>
    </div>
  );
}

export default HomePage;
