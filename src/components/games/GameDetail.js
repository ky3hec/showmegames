import React from "react";
import { Link } from "react-router-dom";

function GameDetail(props) {
  console.log(props);
  return (
    <>
      <Link to="/" className="btn btn-dark btn-sm mb-4 mt-3">
        Go back
      </Link>
      <h1>Game details:{}</h1>
    </>
  );
}
export default GameDetail;
