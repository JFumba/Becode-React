import React from 'react';
import {Link} from 'react-router-dom';


const Landing =()=>(
    <div className="landing">
        <h1 className="main-title">My Movie List  </h1>
        <Link to="/movie" className="home-button">Click on me </Link>
    </div>
)
export default Landing;