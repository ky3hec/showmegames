import React from "react";
import GameList from "./GameList";

const Games = ({ list = [], heading = "Change it" }) => {
  return (
    <>
      <h3 className="text-center mb-4">{heading}</h3>
      <GameList gameList={list} />
    </>
  );
};
export default Games;
