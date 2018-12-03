import React, { Component } from 'react';
import './include/mdb';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FullPageIntroWithNonFixedTransparentNavbar from "./components/intro/intro";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <Switch>
                  <Route component={FullPageIntroWithNonFixedTransparentNavbar}/>
              </Switch>
          </div>
      </BrowserRouter>
      // <div className="App">
      //     <NavbarPage/>
      //     <Navbar/>
      // </div>
    );
  }
}

export default App;
