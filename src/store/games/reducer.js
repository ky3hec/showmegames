import { requestStatuses } from "../../appConfig";
import {
  TOP_GAMES_FAILED,
  TOP_GAMES_LOADED,
  TOP_GAMES_REQUESTED,
  GAME_SEARCH_FAILED,
  GAME_SEARCH_LOADED,
  GAME_SEARCH_REQUESTED,
} from "./types";
//Reducer
const initialState = {
  list: [],
  heading: "",
  status: "",
  error: "",
  pageSize: 10,
  searchTerm: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GAME_SEARCH_REQUESTED:
    case TOP_GAMES_REQUESTED:
      return { ...state, status: requestStatuses.REQUESTED };
    case TOP_GAMES_FAILED:
    case GAME_SEARCH_FAILED:
      return {
        ...state,
        status: requestStatuses.FAILED,
        error: action.payload,
      };
    case TOP_GAMES_LOADED:
      return {
        ...state,
        list: action.payload.games,
        heading: "Top 10 Games",
        status: requestStatuses.SUCCESS,
      };
    case GAME_SEARCH_LOADED:
      return {
        ...state,
        list: action.payload.games,
        heading:
          action.payload.search === "top10"
            ? "Top 10 Games"
            : `Look what we found for: ${action.payload.search}`,
        status: requestStatuses.SUCCESS,
        searchTerm: action.payload.search,
      };
    default:
      return state;
  }
}
