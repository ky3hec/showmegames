import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { store } from "./store/store";
import { getTopGames } from "./store/games";
// import axios from "axios";

// export async function getAccessInfo() {
//   const response = await axios.request({
//     url: "/oauth2/token",
//     method: "POST",
//     params: {
//       client_id: process.env.REACT_APP_CLIENT_ID,
//       client_secret: process.env.REACT_APP_CLIENT_SECRET,
//       grant_type: "client_credentials",
//     },
//   });
//   return {
//     Accept: "application/json",
//     "Client-ID": process.env.REACT_APP_CLIENT_ID,
//     Authorization: `Bearer ${response.data.access_token}`,
//   };
// }
// getAccessInfo();
store.dispatch(getTopGames());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
