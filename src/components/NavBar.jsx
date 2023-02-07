import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-style">
      <div className="flex-centered">
        <Link className="Nav_link" to="/">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
