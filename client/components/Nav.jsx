import React, { useState } from 'react';

const Nav = ({ setZip }) => {
  const handleSubmit = e => {
    e.preventDefault();
    setZip(input);
  };

  const [input, setInput] = useState(null);

  return (
    <div className="container-sm">
      <nav className="navbar navbar-light bg-light">
        <a id="weather" href="/">
          Weather<span id="me">Me</span>
        </a>
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
              className="btn btn-outline-primary my-2 my-sm-0 submit"
              type="submit"
            >
              submit
            </button>
          </form>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
