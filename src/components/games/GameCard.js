import React from "react";
import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <div className="col-md-6">
      <Link to={`/game/${game.id}`}>
        <div className="mb-2 shadow-sm p-2 rounded">
          <img src={game.image} alt=""></img>
          <div className="card-body pl-5">
            <h3>{game.name}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default GameCard;
