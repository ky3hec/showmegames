import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-5 border-bottom border-dark">
      <span className="navbar-brand mb-0 h1 mx-auto">React Game Informer</span>
    </nav>
  );
};

export default React.memo(Navbar);
