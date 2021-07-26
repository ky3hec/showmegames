import React, { useState } from "react";

function Search() {
  const [gameTitle, setGameTitle] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(gameTitle);
    setGameTitle("");
    //TODO dispatch GAMES/SEARCH
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
