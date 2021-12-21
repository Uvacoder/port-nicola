import "./App.css";

import Gallery from "./components/Gallery";
import FrontPage from "./components/FrontPage";
import About from "./components/About";
import Contact from "./components/Contact";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path='/' component={FrontPage}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/gallery' component={Gallery}/>
        <Route exact path='/contact' component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
