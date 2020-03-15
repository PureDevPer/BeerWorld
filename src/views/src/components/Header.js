import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { HomeIcon, HeartEmptyWhite } from "../assets/images";

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #4266b2;
  border-bottom: 2px #29487d solid;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5%;
`;

const HeaderItem = styled.li`
  &:first-child {
    margin-right: 20px;
  }
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <HeaderWrapper>
      <HeaderItem current={pathname === "/"}>
        <Link to="/">
          <HomeIcon />
        </Link>
      </HeaderItem>
      <HeaderItem current={pathname === "/favorite"}>
        <Link to="/favorite">
          <HeartEmptyWhite />
        </Link>
      </HeaderItem>
    </HeaderWrapper>
  </Header>
));
