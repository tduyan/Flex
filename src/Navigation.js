import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { Form,Button } from 'react-bootstrap';
import './App.css';

function Navigation() {
    return(
        <div className="navigation">
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
            </Navbar>
        </div>
    )
}

export default Navigation