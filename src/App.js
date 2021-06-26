import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import ResumePage from "./components/ResumePage";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PortfolioPage from "./components/PortfolioPage";
import WorkPage from "./components/WorkPage/WorkPage";

function App() {
  return (
    <div className="introduction">
      <Router>
        <Header />
        <div>
          <Header />
          <HomePage />
          <WorkPage />
          {/* <PortfolioPage /> */}
          {/* <ResumePage /> */}
        </div>
        {/* <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route exact path="/work" component={() => <WorkPage />} />
          <Route exact path="/BUILDINGS" component={() => <WorkPage />} />
          <Route exact path="/PHOTOGRAPHY" component={() => <WorkPage />} />
          <Route exact path="/MUSINGS" component={() => <WorkPage />} />
          <Route exact path="/WRITINGS" component={() => <WorkPage />} />
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
