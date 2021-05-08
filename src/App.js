import saxaphone from "./saxaphone.png";
import "./App.css";
import Home from "./Home";
import { Link } from "react-router-dom";
import Routes from "./Routes";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
import Navbar from "./Navbar";
import Hire from './Hire'
import About from './About'

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/hire">
            <Hire />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
