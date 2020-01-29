import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      WeatherMe
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/forecast">Forecast</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
