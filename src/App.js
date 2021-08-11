import { Redirect, Route, Switch } from "react-router-dom";
import Index from "./components/layout/Index";
import GameDetail from "./components/games/GameDetail";
import NotFound from "./components/layout/notfound";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route path="/game/:gameid" component={GameDetail} exact />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/" component={Index} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
