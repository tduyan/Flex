/*
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import './AdminConsole.css';
import Sidebar from './components/AdminSidebar';
import LandingPage from './LandingPage';
import UserList from "./UserList";
import Navbar from './components/AdminNavbar/AdminNavBar';
import Widget from './components/AdminWidgets/Widget';
import List from './components/AdminTable/Table';

function AdminConsole() {
    return(
        <div className="AdminConsole">
            <Sidebar />
            <div className="adminContainer">
                <Navbar />
                <div className="listContainer">
                    <List />
                </div>
            </div>
        </div>
    );
}
export default AdminConsole;
*/
import React from "react";
import Retool from "react-retool";
import { Link, useNavigate } from 'react-router-dom';
import {useUserContext} from './userContext'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { Form,Button } from 'react-bootstrap';
import {db, logout} from "./firebase.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  buttonClicked(event) {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
        <div className="retool-box">
          <Navbar bg="dark" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                      <NavLink className="d-inline p-2 bg-dark text-white" to="/Home">
                          Home
                      </NavLink>
                      <NavLink className="d-inline p-2 bg-dark text-white" to="/TVShows">
                          TV Shows
                      </NavLink>
                      <NavLink className="d-inline p-2 bg-dark text-white" to="/Movies">
                          Movies
                      </NavLink>
                      <NavLink className="d-inline p-2 bg-dark text-white" to="/ActWiki">
                          ActWiki
                      </NavLink>
                  </Nav>
              </Navbar.Collapse>
              <Form className="d-flex">
                  <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
              </Form>
              <NavLink className="d-inline p-2 bg-dark text-white ml-auto" to="/UserAccount">
                  Account
              </NavLink>
              <button className="d-inline p-2 bg-dark text-white ml-auto" onClick={logout}>
                  Log Out
              </button>
          </Navbar>
        <iframe src="https://csci491bflex.retool.com/apps/firebase%20auth%20admin%20panel?_embed=true" width="100%" height="2000px"></iframe>
        </div>
    );
  }
}

export default App;