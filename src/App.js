import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./components/layout/Index";
import GameDetail from "./components/games/GameDetail";

function App() {
  //TODO dispatch GAMES/GET_TOP
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path={["/", "/page/:currentPage"]} component={Index} />
            <Route
              path="/game/:gameid"
              render={() => {
                console.clear();
                console.log("I've send a request to server");
                return <GameDetail />;
              }}
              exact
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
