import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ setZip }) => {
  const handleSubmit = e => {
    e.preventDefault();
    setZip(input);
  };

  const [input, setInput] = useState(null);

  return (
    <nav className="navbar navbar-light bg-light">
      <NavLink to="/">WeatherMe</NavLink>
      <ul className="nav justify-content-end">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="enter zipcode"
            aria-label="submit"
            onChange={e => setInput(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            submit
          </button>
        </form>
        <li className="nav-item">
          <NavLink to="/">Day</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/forecast">Forecast</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
