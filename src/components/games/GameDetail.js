import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import GameSummary from "./GameSummary";

function GameDetail() {
  const history = useHistory();
  const { gameid } = useParams();
  const [game] = useSelector((state) =>
    state.games.list.filter((game) => {
      return game.id === +gameid;
    })
  );
  if (!game) return <Redirect to="/" />;
  const bigCoverUrl = game.cover.url.replace("t_thumb", "t_cover_big");
  return (
    <>
      <button
        onClick={history.goBack}
        className="btn btn-info btn-sm mb-4 mt-3"
      >
        Go back
      </button>
      <div className="row justify-content-center">
        <div className="col">
          <h1>{game.name}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src={bigCoverUrl} alt="" />
        </div>
        <div className="col">
          <div className="list-group list-group-flush">
            <div className="list-group-item">
              <strong>Genre: </strong>
              {game.genres?.map(({ name, id }) => (
                <span className="badge bg-warning text-dark me-1" key={id}>
                  {name}
                </span>
              ))}
            </div>
            <div className="list-group-item">
              <strong>Platform: </strong>
              {game.platforms?.map(({ abbreviation, id }) => (
                <span className="badge bg-info text-dark me-1" key={id}>
                  {abbreviation}{" "}
                </span>
              ))}
            </div>
            <GameSummary summary={game.summary} />
          </div>
        </div>
      </div>
    </>
  );
}
export default GameDetail;
