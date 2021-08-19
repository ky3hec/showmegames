import React from "react";
import { NavLink } from "react-router-dom";

function GameCard({ game }) {
  const {
    name,
    cover: { url },
  } = game;
  return (
    <div className="col-md-6">
      <div className="mb-2 shadow-sm p-2 rounded">
        <NavLink to={`/game/${game.id}`} className="nav-link">
          <img src={url} className="img-thumbnail" alt=""></img>
          <div className="card-body pl-5">
            <h5>{name}</h5>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
export default GameCard;
