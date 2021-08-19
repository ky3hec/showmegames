import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { searchGames } from "../../store/games/actions";

function Search() {
  const [gameTitle, setGameTitle] = useState("");
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { search } = queryString.parse(location.search);
  useEffect(() => {
    if (search) {
      dispatch(searchGames(search.replace(/_/g, " ")));
      setGameTitle(search.replace(/_/g, " "));
    }
  }, [dispatch, search]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const searchTerm = gameTitle.trim().replace(/\s/g, "_").toLowerCase();
    history.replace(`/?search=${searchTerm}&page=1`);
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
