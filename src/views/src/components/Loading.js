import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  margin-top: 13%;
  text-transform: uppercase;
  color: #ff7675;
`;

const Loading = () => {
  return <Container>Loading...</Container>;
};

export default Loading;
