import React from "react";
import "./Home.css";
import avatar from "../../avatar.jpeg";

const Home = () => {
  const links = {
    email: "mailto:lishan1512@gmail.com",
    linkedin: "http://www.linkedin.com/in/li-shan-ho",
    github: "https://github.com/nahsiloh",
  };

  return (
    <div id="home" className="home__main">
      <section id="home__title">
        <h1>Hell</h1>
        <img id="home__avatar" src={avatar} alt="o" />
      </section>
      <h2>I'm Li Shan</h2>
      <section className="home__intro">
        <h4>
          Architect turned Software Developer. I value design and enjoy the
          process of creating things.
        </h4>
      </section>
      <section className="home__links">
        {Object.keys(links).map((link) => {
          return (
            <a href={links[link]}>
              <img src={require(`../../assets/svg/${link}.svg`)} />
            </a>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
