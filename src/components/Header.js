import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">HOOZE</a>
    <div>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
          <Link to="/friends" className="nav-link" href="#">📃</Link>
        </li>
      <li className="nav-item">
        <Link to="/friends/add" className="nav-link" href="#">✏️</Link>
      </li>
      </ul>
    </div>
  </nav>
);

export default Header;