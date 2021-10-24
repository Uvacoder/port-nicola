import "./App.css";

import Gallery from "./components/Gallery";
import FrontPage from "./components/FrontPage";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path='/' component={FrontPage}/>
        <Route exact path='/gallery' component={Gallery}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
