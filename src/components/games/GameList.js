import React from "react";

import GameCard from "./GameCard";

const GameList = ({ gameList }) => {
  return (
    <div className="row">
      {gameList.map((game) => {
        return <GameCard game={game} key={game.id} />;
      })}
    </div>
  );
};
export default GameList;
