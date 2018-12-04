import React, { Component } from 'react';
import './include/mdb';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import FooterPage from "./components/footer/footer";

class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
              <div className="app">
                  <Switch>
                      <Route path="/intro" component={Intro}/>
                      <Route path="/about" component={About} />
                      <Route component={Intro} />
                  </Switch>
                  <FooterPage/>
              </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
