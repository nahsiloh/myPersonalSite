import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import WorkPage from "./components/WorkPage";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route exact path="/work" component={() => <WorkPage />} />
          <Route exact path="/BUILDINGS" component={() => <WorkPage />} />
          <Route exact path="/PHOTOGRAPHY" component={() => <WorkPage />} />
          <Route exact path="/MUSINGS" component={() => <WorkPage />} />
          <Route exact path="/WRITINGS" component={() => <WorkPage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
