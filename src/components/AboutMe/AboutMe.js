import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="aboutMe__main">
      <h3>About Me</h3>
      <p>
        Hello! My name is Li Shan and I enjoy the process of creating things. My
        interest in web development sparked back in 2019 during my sabbatical
        from architecture when I barter-traded my interior design skills for a
        python introductory course and I was hooked! I then took a web
        development bootcamp from Udemy and ultimately got into the ThoughtWorks
        bootcamp.
      </p>
      <p>
        Its been a wild ride in tech for me switching careers through the
        pandemic, but I am super grateful to be working at EYOS, a retail growth
        platform, where I work on products where we provide our clients valuable
        data on their products.
      </p>
      <p>
        Through my passion for design and technology, I seek to build ideas and
        products that bring communities together.
      </p>
      <p>Here are a few technologies I've been working with recently</p>
      <section>
        <li>Javascript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Snowflake</li>
      </section>
    </div>
  );
};

export default AboutMe;
