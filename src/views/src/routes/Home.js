import React from "react";
import Helmet from "react-helmet";
import Landing from "../components/Landing";
import Title from "../components/Title";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Beer World</title>
      </Helmet>
      <Title text="Beer World" />
      <Landing getBeerURL="data" />
    </>
  );
};

export default Home;
