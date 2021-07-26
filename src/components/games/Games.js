import React from "react";
import Spinner from "../layout/Spinner";
import GameList from "./GameList";
import Pagination from "../layout/Pagination";

import { games_list } from "../../mockData";
import { useParams } from "react-router-dom";

const Games = () => {
  let { currentPage = "1" } = useParams();
  // if (currentPage === undefined) currentPage = "1";
  const heading = "Top 10 games";
  const { length } = games_list;
  const pageSize = 4;
  if (games_list === undefined || games_list.length === 0) {
    return <Spinner />;
  } else {
    return (
      <>
        <h3 className="text-center mb-4">{heading}</h3>
        <GameList gameList={games_list} />
        <Pagination
          itemsCount={length}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </>
    );
  }
};
export default Games;
