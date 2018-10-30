import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './views/Home';
import ShowCard from './views/ShowCard';

import './App.css';

class App extends React.Component {
 
  render()  {
    return  (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route exact path="/movie" component={ShowCard}/>
        </div>
      </BrowserRouter>
    );
  }
 
}
 

export default App;