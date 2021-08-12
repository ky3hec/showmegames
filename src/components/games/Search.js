import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchGames } from "../../store/games/actions";

function Search({ value }) {
  const [gameTitle, setGameTitle] = useState(value);
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const searchTerm = gameTitle.trim().replace(/\s/g, "_").toLowerCase();
    history.replace(`/?search=${searchTerm}&page=1`);
    dispatch(searchGames(gameTitle.trim().toLowerCase()));
  };
  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        Search For A Game <i className="fas fa-gamepad text-info" />{" "}
      </h1>
      <div className="form-group">
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div className="input-group">
            <input
              type="text"
              name="gameInput"
              id="gameInput"
              className="form-control"
              aria-label=""
              placeholder="Get details about your favorite game"
              value={gameTitle}
              onChange={(e) => setGameTitle(e.target.value)}
            />
            <div className="input-group-append m-1">
              <button
                type="submit"
                name="submitButton"
                className="btn btn-info"
              >
                Search!
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
