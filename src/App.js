import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./components/layout/Index";
import GameDetail from "./components/games/GameDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route path="/" component={Index} exact />
            <Route path="/game/:gameid" component={GameDetail} exact />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
