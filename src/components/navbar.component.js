import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Admin Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">User Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/friendsboard" className="nav-link">Friends</Link>
          </li>
          <li className="navbar-item">
          <Link to="/map" className="nav-link">Map</Link>
          </li>
          <li className="navbar-item">
          <Link to="/testboard" className="nav-link">TestBoard</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}