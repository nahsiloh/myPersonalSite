import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import WorkPage from "./components/WorkPage/WorkPage";

function App() {
  return (
    <div className="introduction">
      <Router>
        <Header />
        <div>
          <Header />
          <Home />
          <AboutMe />
          <WorkPage />
          {/* <PortfolioPage /> */}
          {/* <ResumePage /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
