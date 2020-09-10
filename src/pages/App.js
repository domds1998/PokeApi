import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import { GlobalStyle } from "../styles/appStyles";

class App extends Component {
   state = {};
   render() {
      return (
         <Router>
         <>
            <GlobalStyle />
            <Route path="/" exact component={Home}></Route>
            <Route path="/details" exact component={Details}></Route>
            <Route path="/details/:pokemonId" exact component={Details}></Route>
         </>
         </Router>
      );
   }
}

export default App;
