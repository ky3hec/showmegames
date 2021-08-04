import React from "react";
import { Link } from "react-router-dom";

function GameCard({ game }) {
  const {
    name,
    cover: { url },
  } = game;
  return (
    <div className="col-md-6">
      <div className="mb-2 shadow-sm p-2 rounded">
        <Link to={`/game/${game.id}`}>
          <img src={url} className="img-thumbnail" alt=""></img>
        </Link>
        <div className="card-body pl-5">
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
}
export default GameCard;
