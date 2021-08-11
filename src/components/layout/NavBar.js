import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-5 border-bottom border-dark">
      <NavLink
        className="navbar-brand mb-0 h1 mx-auto"
        to={() => {
          return "/";
        }}
      >
        React Game Informer
      </NavLink>
    </nav>
  );
};

export default React.memo(Navbar);
