import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import PortfolioPage from "./components/PortfolioPage";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route exact path="/portfolio" component={() => <PortfolioPage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
