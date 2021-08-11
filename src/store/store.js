import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import gamesReducer from "./games/reducer";

const rootReducer = combineReducers({
  games: gamesReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV === "development"
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : null
  )
);
