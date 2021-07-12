import React from "react";
import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <img src={game.image} className="card-img-top img-fluid" alt=""></img>
        <div className="card-body">
          <h5>{game.name}</h5>
          <Link to={`/game/${game.id}`} className="btn btn-dark btn-block">
            <i className="fas fa-chevron-right"></i>View game details
          </Link>
        </div>
      </div>
    </div>
  );
}
export default GameCard;
