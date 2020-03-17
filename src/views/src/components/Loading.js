import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-top: 13%;
`;

const Loading = () => {
  return <Container>Loading...</Container>;
};

export default Loading;
