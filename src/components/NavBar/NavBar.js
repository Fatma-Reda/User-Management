import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">Seam Labs</span>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink to="/" exact className=" nav-link active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" nav-link" to="/user/">
            Add User
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" nav-link" to="/">
            Link
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
