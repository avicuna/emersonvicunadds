import React, { Component } from 'react';
import './include/mdb';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Services from "./components/services/services";
import Contact from "./components/contact/contact";
import Forms from "./components/forms/forms";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {lang: "English"}
    }

    langSwitch = (e) => {
        e.preventDefault();
        if(e.target.value === "English"){
            this.setState({lang: "English"})
        }
        else {
            this.setState({lang: "Spanish"});
        }
    };

    langSwitchES = (e) => {
        e.preventDefault();
        this.setState({lang: "Spanish"});
    };


    render() {
    return (
        <div>
          <BrowserRouter>
              <div className="app">
                  <Switch>
                      <Route path="/home" render={(props) => <Home {...props} lang={this.state.lang} langSwitch={this.langSwitchES}/>} />
                      <Route path="/about" component={About}/>
                      <Route path="/services" component={Services}/>
                      <Route path="/forms" component={Forms}/>
                      <Route path="/contact" component={Contact}/>
                      <Route render={(props) => <Home {...props} lang={this.state.lang} langSwitch={this.langSwitchES}/>} />
                  </Switch>
              </div>
          </BrowserRouter>
        </div>
    );
    }
}

export default App;
