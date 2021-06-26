import React from "react";
import "./Main.css";
import avatar from "../avatar.jpeg";

function HomePage() {
  const links = {
    email: "mailto:lishan1512@gmail.com",
    linkedin: "http://www.linkedin.com/in/li-shan-ho",
    github: "https://github.com/nahsiloh",
  };

  return (
    <div>
      <div id="homePage" className="homePage__main">
        <section id="homePage__title">
          <h1>Hell</h1>
          <img id="homePage__avatar" src={avatar} alt="o" />
        </section>
        <h2>I'm Li Shan</h2>
        <section className="homePage__intro">
          <h4>Architect turned Software Developer.</h4>
          <h4>I value design and enjoy the process of creating things.</h4>
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
      <div id="aboutMe" className="aboutMe__main">
        <h3>About Me</h3>
        <p>
          Hello! My name is Li Shan and I enjoy the process of creating things.
          My interest in web development sparked back in 2019 during my
          sabbatical from architecture when I barter-traded my interior design
          skills for a python introductory course and I was hooked! I then took
          a web development bootcamp from Udemy and ultimately got into the
          ThoughtWorks bootcamp.
        </p>
        <p>
          Its been a wild ride in tech for me switching careers through the
          pandemic, but I am super grateful to be working at EYOS, a retail
          growth platform, where I work on products where we provide our clients
          valuable data on their products.
        </p>
        <p>
          Through my passion for design and technology, I seek to build ideas
          and products that bring communities together.
        </p>
        <p>Here are a few technologies I've been working with recently</p>
        <section>
          <li>Javascript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Snowflake</li>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
