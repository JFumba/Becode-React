import React from 'react'
import data from '../movie.json';

const ShowCard = props =>(
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
)

export default ShowCard;