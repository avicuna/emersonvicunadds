import React, { Component } from 'react';
import './include/mdb';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Nav from "./components/navbar/navbar";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {lang: "eng"}
    }

    render() {
    return (
        <div>
          <BrowserRouter>
              <div className="app">
                  <Nav/>
                  <Switch>
                      <Route path="/home" component={Intro}/>
                      <Route path="/about" component={About} />
                      <Route component={Intro} />
                  </Switch>
              </div>
          </BrowserRouter>
        </div>
    );
    }
}

export default App;
