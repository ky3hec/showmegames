import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Index from "./components/layout/Index";
import GameDetail from "./components/games/GameDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route
              exact
              path="/:currentPage?"
              render={(props) => {
                let { currentPage } = props.match.params;
                if (!isNaN(currentPage)) return <Index />;
                else return <Redirect to="/" />;
              }}
            />
            <Route path="/game/:gameid" component={GameDetail} exact />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
