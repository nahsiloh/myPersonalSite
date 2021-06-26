import React, { useState } from "react";
import "../Main.css";

import { workData } from "./data";

const WorkPage = () => {
  const industryList = ["Tech", "Architecture"];
  const [jobSelected, setJobSelected] = useState(workData[0]);
  const [industrySelected, setIndustrySelected] = useState(
    workData[0].industry
  );

  const onClickHandler = (e) => {
    const jobDetails = workData.find((data) => data.name === e.target.value);
    setJobSelected(jobDetails);
    setIndustrySelected(jobDetails.industry);
  };

  return (
    <div id="workPage" className="workPage__main">
      <h3>Work</h3>
      <div className="workPage__section">
        <div className="workPage__sub_section">
          <div className="workPage__roles">
            {industryList.map((industry) => (
              <p
                style={{
                  backgroundColor: `${
                    industrySelected === `${industry}` ? "black" : "transparent"
                  }`,
                }}
              >
                {industry}
              </p>
            ))}
          </div>
          <div className="workPage__buttons">
            {workData.map((data) => (
              <button value={data.name} onClick={onClickHandler}>
                {data.name}
              </button>
            ))}
          </div>
        </div>
        <div className="workPage__description">
          <section>
            <h4>{jobSelected.name}</h4>
            <h5>{jobSelected.position}</h5>
            <p>
              {jobSelected.startDate} - {jobSelected.endDate}
            </p>
            <div className="workPage__portfolio">
              {industrySelected === "Architecture" &&
                jobSelected.portfolio.map((p) => (
                  <section>
                    <img id="workPage__portfolio_image" src={p.image} />
                    <h5>{p.name}</h5>
                    <p id="workPage__portfolio_typology">({p.typology})</p>
                    <p id="workPage__portfolio_stage">{p.stage}</p>
                  </section>
                ))}
            </div>
            <ul>
              {jobSelected.roles.map((role) => (
                <li>{role}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
