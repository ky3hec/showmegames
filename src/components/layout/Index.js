import React from "react";
import Search from "../games/Search.js";
import Games from "../games/Games.js";
import Navbar from "./NavBar.js";

const Index = () => {
  return (
    <>
      <Navbar />
      <Search />
      <Games />
    </>
  );
};
export default Index;
