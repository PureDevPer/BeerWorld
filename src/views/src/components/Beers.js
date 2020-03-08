import React from "react";
import PropTypes from "prop-types";
import { beerImage } from "../assets/images";

const Beers = ({ name, picture, description, abv }) => {
  return (
    <>
      {picture ? (
        <img src={picture} alt={name} title={name} />
      ) : (
        <img src={beerImage} alt={name} title={name} />
      )}
      <>
        <p>{name}</p>
        <p>{abv}</p>
        <p>{description}</p>
      </>
    </>
  );
};

Beers.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string,
  abv: PropTypes.number.isRequired
};

export default Beers;
