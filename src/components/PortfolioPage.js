import React from "react";
// import "./PortfolioPage.css";
import portfolioData from "../assets/portfolioData";

function PortfolioPage() {
  return (
    <div id="portfolio" className="portfolioPage__main">
      {portfolioData.map((app) => {
        return (
          <div key={app.title} className="portfolioPage__item">
            <a href={app.url}>
              <img
                className="portfolioPage__appImage"
                src={app.image}
                alt={app.title}
              />
            </a>
            <p className="portfolioPage__description">{app.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PortfolioPage;
