import React from "react";
import { useHistory } from "react-router-dom";

function GameDetail(props) {
  const history = useHistory();

  // TODO get game name, genre, storyLine, summary, first_release_date, cover
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
          <h1>Awesome Game Name</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Cover here</h3>
        </div>
        <div className="col">
          <h3>Details here</h3>
          <div className="list-group">
            <div className="list-group-item">Here 1</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default GameDetail;
