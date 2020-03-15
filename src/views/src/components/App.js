import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Routes from "./Routes";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes />
      </Router>
    </>
  );
};

export default App;
