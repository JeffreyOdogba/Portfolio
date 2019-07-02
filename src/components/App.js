import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import About from "./About";
import SocialComponent from './SocialComponent';
import Category from './Category';
import BeerStore from './BeerStore';
import ClmBookingSystem from './ClmBookingSystem';
import FlexiLearn from './FlexiLearn';

class App extends React.Component {
  render() {
     return (
      <div>        
        <BrowserRouter basename="/" component={Portfolio}>
          <div>
          <NavBar myname="Jeffrey Odogba" />
          <Route path="/" exact component={Portfolio} />
            <Route path="/About" component={About} />
            <Route path="/Category" component={Category} />
            <Route path= "/BeerStore" component={BeerStore}/>
            <Route path="/ClmBookingSystem" component={ClmBookingSystem}/>
            <Route path="/FlexiLearn" component={FlexiLearn} />            
            <SocialComponent/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
