import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Header = styled.div`
  text-align: center;
  margin-top: 130px;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Title = ({ text }) => {
  return <Header>{text}</Header>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;
