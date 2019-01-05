import React, { Component } from 'react';
import './include/mdb';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Services from "./components/services/services";
import Contact from "./components/contact/contact";
import Forms from "./components/forms/forms";
import * as english from "./text/english/english";
import * as spanish from "./text/spanish/spanish";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            lang: "English",
            text: english
        }
    }

    langSwitchEN = (e) => {
        e.preventDefault();
        this.setState({
            lang: "English",
            text: english
        });

    };

    langSwitchES = (e) => {
        e.preventDefault();
        this.setState({
            lang: "Spanish",
            text: spanish
        });
    };

    render() {
    return (
        <div>
          <BrowserRouter>
              <div className="app">
                  <Switch>
                      <Route
                          path="/home"
                          render={(props) =>
                              <Home {...props}
                                    lang={this.state.lang}
                                    text={this.state.text}
                                    langSwitchEN={this.langSwitchEN}
                                    langSwitchES={this.langSwitchES}
                              />
                          }
                      />
                      <Route
                          path="/about"
                          render={(props) =>
                              <About {...props}
                                     lang={this.state.lang}
                                     text={this.state.text}
                                     langSwitchEN={this.langSwitchEN}
                                     langSwitchES={this.langSwitchES}
                              />
                          }
                      />
                      <Route
                          path="/services"
                          render={(props) =>
                              <Services {...props}
                                    lang={this.state.lang}
                                    text={this.state.text}
                                    langSwitchEN={this.langSwitchEN}
                                    langSwitchES={this.langSwitchES}
                              />
                          }
                      />
                      <Route
                          path="/forms"
                          render={(props) =>
                              <Forms {...props}
                                     lang={this.state.lang}
                                     text={this.state.text}
                                     langSwitchEN={this.langSwitchEN}
                                     langSwitchES={this.langSwitchES}
                              />
                          }
                      />
                      <Route
                          path="/contact"
                          render={(props) =>
                              <Contact {...props}
                                       lang={this.state.lang}
                                       text={this.state.text}
                                       langSwitchEN={this.langSwitchEN}
                                       langSwitchES={this.langSwitchES}
                              />
                          }
                      />
                      <Route
                          render={(props) =>
                              <Home
                                  {...props}
                                  lang={this.state.lang}
                                  text={this.state.text}
                                  langSwitchEN={this.langSwitchEN}
                                  langSwitchES={this.langSwitchES}
                              />
                          }
                      />
                  </Switch>
              </div>
          </BrowserRouter>
        </div>
    );
    }
}

export default App;
