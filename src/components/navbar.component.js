import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {Nav, Navbar, Form, NavDropdown, Button, FormControl} from 'react-bootstrap';

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
      );
    }
  }