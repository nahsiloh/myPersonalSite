import shentonImage from "../../assets/architecture/dp/76Shenton.jpg";
import kandyHillImage from "../../assets/architecture/dp/kandyHill.jpg";
import tyrwhittImage from "../../assets/architecture/dp/tyrwhitt.jpg";
import wanjiangImage from "../../assets/architecture/dp/wanjiang.jpg";

import balmoralImage from "../../assets/architecture/arc/balmoral.jpg";

import gessImage from "../../assets/architecture/p&t/GESS.jpg";
import pandanImage from "../../assets/architecture/p&t/218Pandan.jpg";
import mohhImage from "../../assets/architecture/p&t/MOHH.jpg";
import NLCSImage from "../../assets/architecture/p&t/NLCS.jpg";
import punggolNorthImage from "../../assets/architecture/p&t/punggolNorth.jpg";

import { WorkObject } from "./WorkPage";

export const workData: WorkObject[] = [
  {
    name: "EYOS",
    position: "Software Engineer",
    startDate: "Mar 2020",
    endDate: "present",
    industry: "Tech",
    roles: [
      "Work in a Agile/ Scrum environment, alongside product owners, QA, UX designer and other developers to develop new features and products, to understand the requirements and ensure that different all user flow scenarios are considered.",
      "Build RESTful APIs, serving and computing aggregated data from Snowflake database",
      "Involved end-to-end from development to product feature going live.",
      "Worked on Front-end development work for our data visualisation platform using React and D3.",
      "Was involved in database migration work from MongoDB to Snowflake.",
    ],
  },
  {
    name: "P&T Consultants",
    position: "Senior Architect",
    startDate: "Mar 2020",
    endDate: "present",
    industry: "Architecture",
    portfolio: [
      {
        name: "German European School Singapore",
        period: 2014,
        typology: "International school",
        stage: "Design - Completion",
        location: "Singapore",
        image: gessImage,
      },
      {
        name: "218 Pandan Loop",
        period: 2017,
        typology: "Food warehouse",
        stage: "Competition (won)",
        location: "Singapore",
        image: pandanImage,
      },
      {
        name: "North London Collegiate School",
        period: 2017,
        typology: "International School",
        stage: "Design - Tender",
        location: "Singapore",
        image: NLCSImage,
      },
      {
        name: "Potong Pasir Nursing Home",
        period: 2018,
        typology: "Nursing home",
        stage: "Competition (won) - Design development",
        location: "Singapore",
        image: mohhImage,
      },
      {
        name: "Punggol North Integrated Development",
        period: 2017,
        typology: "Business Park",
        stage: "Competition",
        location: "Singapore",
        image: punggolNorthImage,
      },
    ],
    roles: [
      "Involved in range of local projects - Institutional, business parks and institutional",
      "Manage and plan the design process to ensure that the project meets the schedule",
      "Ensure that the design is compliant with all the relevant authority requirements",
      "Manage clients, consultants and contractors in weekly stakeholder meetings",
      "Involved in competitions, clinching multiple projects for the company",
    ],
  },
  {
    name: "ARC Studio Architecture + Urbanism",
    position: "Architectural Assistant",
    startDate: "Jan 2014",
    endDate: "Jul 2014",
    industry: "Architecture",
    portfolio: [
      {
        name: "Balmoral Park",
        period: 2014,
        typology: "Residential",
        stage: "Construction",
        location: "Singapore",
        image: balmoralImage,
      },
    ],
    roles: [
      "Involved in construction coordination and contract administration",
    ],
  },
  {
    name: "DP Architects",
    position: "Architectural Associate",
    startDate: "Aug 2012",
    endDate: "Nov 2013",
    industry: "Architecture",
    portfolio: [
      {
        name: "76 Shenton",
        period: 2013,
        typology: "Residential",
        stage: "Construction",
        location: "Singapore",
        image: shentonImage,
      },
      {
        name: "Kandy Hill",
        period: 2013,
        typology: "Mixed use development",
        stage: "Design development",
        location: "Sri Lanka",
        image: kandyHillImage,
      },
      {
        name: "Tyrwhitt Hotel",
        period: 2013,
        typology: "Boutique hotel",
        stage: "Design development",
        location: "Singapore",
        image: tyrwhittImage,
      },
      {
        name: "Wanjiang Logistic Park",
        period: 2013,
        typology: "Industrial warehouse",
        stage: "Design development",
        location: "China",
        image: wanjiangImage,
      },
    ],
    roles: [
      "Worked on a range of projects internationally",
      "Gather and understand design requirements, taking the project from concept to detailed design",
      "Involved in contract administration during construction stage of the projects",
    ],
  },
];
