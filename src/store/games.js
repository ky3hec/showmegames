import axios from "axios";

//Action types
const TOP_GAMES_REQUESTED = "topGamesRequested";
const TOP_GAMES_FAILED = "topGamesFailed";
const TOP_GAMES_LOADED = "topGamesLoaded"; //Success answear
const GAME_SEARCH_REQUESTED = "gameSearchRequested";
const GAME_SEARCH_FAILED = "gameSearchFailed";
const GAME_SEARCH_LOADED = "gameSearchLoaded"; //Success answear

const headers = {
  Accept: "application/json",
  "Client-ID": "xdiovhkl2xnm80fzc5rh8bdvtui3my",
  Authorization: "Bearer vkisjebk22x9cqejj0fx9vjgn8imsq",
};
const statuses = {
  requested: "requested",
  success: "success",
  failed: "failed",
};
const initialState = {
  list: [],
  heading: "",
  status: "",
  error: "",
};
//Action creators
export function searchGames(searchTerm) {
  return async (dispatch) => {
    dispatch(gameSearchRequested());
    try {
      const response = await axios.request({
        headers: headers,
        url: "/games",
        method: "POST",
        data: `search "${searchTerm}";fields cover.url, url, name, summary, platforms.abbreviation, genres.name, id; where cover.url != null;limit 50;`,
      });
      if (response.status === 200) {
        dispatch(gameSearchLoaded(response.data, searchTerm));
      }
    } catch (error) {
      dispatch(gameSearchFailed(error));
    }
  };
}

export function getTopGames() {
  return async (dispatch) => {
    dispatch(topGamesRequested()); //request sended
    try {
      const response = await axios.request({
        headers: headers,
        url: "/games",
        method: "POST",
        data: "fields cover.url, url, name, summary, platforms.abbreviation, genres.name, id; where (rating> 95  & total_rating> 95) & cover != null; sort rating desc; limit 10;",
      });
      if (response.status === 200) {
        dispatch(topGamesLoaded(response.data));
      }
    } catch (error) {
      dispatch(topGamesFailed(error));
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
    payload: {
      status: "requested",
    },
  };
}
export function topGamesFailed(error) {
  return {
    type: TOP_GAMES_FAILED,
    payload: {
      error,
    },
  };
}
export function gameSearchFailed(errorMessage) {
  return {
    type: GAME_SEARCH_FAILED,
    payload: {
      error: errorMessage,
    },
  };
}
//Reducer
export default function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case GAME_SEARCH_REQUESTED:
    case TOP_GAMES_REQUESTED:
      return { ...state, status: statuses.requested };
    case TOP_GAMES_FAILED:
    case GAME_SEARCH_FAILED:
      return { ...state, status: statuses.failed, error: action.payload };
    case TOP_GAMES_LOADED:
      return {
        ...state,
        list: action.payload.games,
        heading: "Top 10 Games",
        status: statuses.success,
      };
    case GAME_SEARCH_LOADED:
      return {
        ...state,
        list: action.payload.games,
        heading: `Look what we found for: ${action.payload.search}`,
        status: statuses.success,
      };
    default:
      return state;
  }
}
