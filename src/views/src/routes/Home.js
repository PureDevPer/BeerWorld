import React from "react";
import styled from "styled-components";
import Landing from "../components/Landing";

const Title = styled.div`
  text-align: center;
  margin: 30px 0px;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Home = () => {
  return (
    <>
      <Title>Beer World</Title>
      <Landing />
    </>
  );
};

export default Home;
