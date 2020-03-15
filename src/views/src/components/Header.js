import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Home, HeartEmpty } from "../assets/images";

export default withRouter(({ location: { pathname } }) => (
  <header>
    <>
      <>
        <li current={pathname === "/"}>
          <Link to="/">
            <Home />
          </Link>
        </li>
        <li current={pathname === "/favorite"}>
          <Link to="/favorite">
            <HeartEmpty />
          </Link>
        </li>
      </>
    </>
  </header>
));
