import React from "react";
import Landing from "../components/Landing";
import Title from "../components/Title";

const Home = () => {
  return (
    <>
      <Title text="Beer World" />
      <Landing getBeerURL="data" />
    </>
  );
};

export default Home;
