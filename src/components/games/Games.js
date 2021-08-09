import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { requestStatuses } from "../../appConfig";
import Spinner from "../layout/Spinner";
import GameList from "./GameList";
import Pagination from "../layout/Pagination";
import ErrorMessage from "../layout/ErrorMessage";
import paginate from "../../utils/paginate";

const Games = () => {
  let { currentPage = "1" } = useParams();
  const { list, status, heading, error, pageSize } = useSelector(
    (state) => state.games
  );
  const { length } = list;
  const games = paginate(list, currentPage, pageSize);
  if (status === requestStatuses.REQUESTED) {
    return <Spinner />;
  } else if (status === requestStatuses.FAILED) {
    return <ErrorMessage error={error} />;
  } else if (status === requestStatuses.SUCCESS) {
    return (
      <>
        <h3 className="text-center mb-4">{heading}</h3>
        <GameList gameList={games} />
        <Pagination
          itemsCount={length}
          currentPage={+currentPage}
          pageSize={pageSize}
        />
      </>
    );
  }
};
export default Games;
