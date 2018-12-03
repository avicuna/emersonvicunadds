import React, { Component } from 'react';
import './include/mdb';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Intro from "./components/intro/intro";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <Switch>
                  <Route component={Intro} />
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
