import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";

import Search from "../games/Search.js";
import Games from "../games/Games.js";
import Navbar from "./NavBar.js";
import ErrorMessage from "../layout/ErrorMessage";
import { requestStatuses } from "../../appConfig";
import Spinner from "../layout/Spinner";
import paginate from "../../utils/paginate";
import Pagination from "../layout/Pagination";
import { searchGames } from "../../store/games/actions";

const Index = ({ location }) => {
  const { page: pageNumber } = queryString.parse(location.search);
  const { status, error } = useSelector((state) => state.games);
  const { list, heading, pageSize } = useSelector((state) => state.games);
  const { length: gamesTotal } = list;
  const { search } = queryString.parse(location.search);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!search) dispatch(searchGames("top10"));
  }, [dispatch, search]);
  const searchPath = location.search.slice(
    0,
    location.search.lastIndexOf("=") + 1
  );
  const currentPage = paginate(list, pageNumber, pageSize);
  return (
    <>
      <Navbar />
      <Search />
      {status === requestStatuses.REQUESTED && <Spinner />}
      {status === requestStatuses.FAILED && <ErrorMessage error={error} />}
      {status === requestStatuses.SUCCESS && (
        <>
          <Games list={currentPage} heading={heading} />
          <Pagination
            itemsCount={gamesTotal}
            currentPage={!pageNumber ? +1 : +pageNumber}
            pageSize={pageSize}
            path={searchPath}
          />
        </>
      )}
    </>
  );
};
export default Index;
