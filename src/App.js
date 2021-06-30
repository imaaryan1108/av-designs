import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Cards from "./components/homepage/Cards";

import Navbar from "./components/navbar/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
