import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Form, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

export default class Navbarr extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Navbar.Brand href="/">ExcerTracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/admin">Admin</Nav.Link>
            <NavDropdown title="Your Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/user">Creat New Profile</NavDropdown.Item>
              <NavDropdown.Item href="/create">Create Exercise Log</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/map">Map</NavDropdown.Item>
              <NavDropdown.Item href="/friendsboard">FriendsBoard</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      // <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      //   <Link to="/" className="navbar-brand">ExcerTracker</Link>
      //   <div className="collpase navbar-collapse">
      //   <ul className="navbar-nav mr-auto">
      //     <li className="navbar-item">
      //     <Link to="/" className="nav-link">Admin Exercises</Link>
      //     </li>
      //     <li className="navbar-item">
      //     <Link to="/create" className="nav-link">Create Exercise Log</Link>
      //     </li>
      //     <li className="navbar-item">
      //     <Link to="/user" className="nav-link">Create User</Link>
      //     </li>
      //     <li className="navbar-item">
      //     <Link to="/login" className="nav-link">User Login</Link>
      //     </li>
      //     <li className="navbar-item">
      //     <Link to="/friendsboard" className="nav-link">Friends</Link>
      //     </li>
      //     <li className="navbar-item">
      //     <Link to="/map" className="nav-link">Map</Link>
      //     </li>
      //     <li class="nav-item dropdown">
      //       <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //         Dropdown
      //       </a>
      //       <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      //         <a class="dropdown-item" >Action</a>
      //         <a class="dropdown-item" >Another action</a>
      //         <div class="dropdown-divider"></div>
      //         <a class="dropdown-item" >Something else here</a>
      //       </div>
      //     </li>
      //   </ul>
      //   </div>
      // </nav>
    );
  }
}