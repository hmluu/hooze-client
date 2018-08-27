import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="jumbotron">
    <h1 className="display-3">Welcome to HOOZE!</h1>
    <p className="lead">It's a combination of hardware and software that utilizes facial recognition to add a new twist on the traditional doorbell.</p>
    <p className="lead">
      <Link to="/friends" className="btn btn-primary btn-lg" href="#" role="button">View Friends</Link>
    </p>
  </div>
);

export default Landing;