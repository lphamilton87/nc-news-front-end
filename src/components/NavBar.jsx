import React from "react";
import { Link } from "react-router-dom";
import TopicsBar from "./TopicsBar";

const NavBar = () => {
  return (
    <nav className="nav-style">
      <div className="flex-centered">
        <Link className="Nav_link" to="/">
          Home{" "}
        </Link>
        <Link className="Nav_link" to="/users">
          {" "}
          Users
        </Link>
        <TopicsBar />
      </div>
    </nav>
  );
};

export default NavBar;
