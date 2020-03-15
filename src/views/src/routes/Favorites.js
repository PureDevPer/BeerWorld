import React, { Component } from "react";
import Title from "../components/Title";
import Landing from "../components/Landing";

const Favorites = () => {
  return (
    <>
      <Title text="Favorite Beer" />
      <Landing getBeerURL="beers" />
    </>
  );
};

export default Favorites;
