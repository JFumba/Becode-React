import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import data from './movie.json'; 
import './App.css';

class App extends React.Component {
 
  render()  {
    return  (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
 
          <hr />
          <div className="main-route-place">
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={Movies} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
 
}
 
class Home extends React.Component {
 
  render()  {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}
 
class Movies  extends React.Component {
  render() {
    return (
      <div class="search">
        
          
          {
            data.movie.map(function (film){
              return (
                        <div class="wrapper-card">
                        <img src={film.Poster}></img>
                        <h3>{film.Title}</h3>
                        <h4>{film.Year}</h4>
                        <p>{film.Plot}</p>
                        </div>
                    );
            })
          }
          
        
      </div>
    );
  }
}
 
class Topic extends React.Component {
  render()  {
    return (
      <div>
        <h3>
          {this.props.match.params.topicId}
        </h3>
      </div>
    );
  }
}
export default App;