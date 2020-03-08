import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Landing from "./Landing";
import styled from "styled-components";

const Header = styled.div`
  text-align: center;
  margin: 30px 0px;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header>Beer World</Header>
      <Landing />
    </>
  );
};

export default App;
