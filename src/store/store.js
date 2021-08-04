import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import appReducer from "./app";
import gamesReducer from "./games";

const rootReducer = combineReducers({
  games: gamesReducer,
  app: appReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
