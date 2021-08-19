import axios from "axios";

import {
  TOP_GAMES_FAILED,
  TOP_GAMES_LOADED,
  TOP_GAMES_REQUESTED,
  GAME_SEARCH_FAILED,
  GAME_SEARCH_LOADED,
  GAME_SEARCH_REQUESTED,
} from "./types";

const headers = {
  Accept: "application/json",
  "Client-ID": process.env.REACT_APP_CLIENT_ID,
  Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
};

//Action creators
export function searchGames(searchTerm = "top10") {
  const requestConfig = {
    headers: headers,
    url: "/games",
    method: "POST",
  };
  if (searchTerm === "top10") {
    requestConfig.data =
      "fields cover.url, url, name, summary, platforms.abbreviation, genres.name, id; where (rating> 95  & total_rating> 95) & cover != null; sort rating desc; limit 10;";
  } else if (searchTerm.length > 0) {
    requestConfig.data = `search "${searchTerm}";fields cover.url, url, name, summary, platforms.abbreviation, genres.name, id; where cover.url != null;limit 50;`;
  }
  return async (dispatch) => {
    dispatch(gameSearchRequested());
    try {
      const response = await axios.request(requestConfig);
      if (response.status === 200) {
        dispatch(gameSearchLoaded(response.data, searchTerm));
      }
    } catch (error) {
      dispatch(gameSearchFailed(error));
    }
  };
}

export function topGamesLoaded(games) {
  return {
    type: TOP_GAMES_LOADED,
    payload: { games },
  };
}

export function gameSearchLoaded(games, search) {
  return {
    type: GAME_SEARCH_LOADED,
    payload: { games, search },
  };
}

export function topGamesRequested() {
  return {
    type: TOP_GAMES_REQUESTED,
  };
}

export function gameSearchRequested() {
  return {
    type: GAME_SEARCH_REQUESTED,
  };
}

export function topGamesFailed(error) {
  return {
    type: TOP_GAMES_FAILED,
    payload: {
      error: error,
    },
  };
}

export function gameSearchFailed(error) {
  return {
    type: GAME_SEARCH_FAILED,
    payload: {
      error: error,
    },
  };
}
