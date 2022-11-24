import React, { Component, useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { Form,Button } from 'react-bootstrap';
import './App.css';
import MovieSearch from './MovieSearch';

function Navigation() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.error(err);
        //alert("An error occured while fetching user data");
      }
    };
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
      fetchUserName();
    }, [user, loading]);
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
                < MovieSearch/>
                <NavLink className="d-inline p-2 bg-dark text-white ml-auto" to="/UserAccount">
                    Account
                </NavLink>
                <button className="d-inline p-2 bg-dark text-white ml-auto" onClick={logout}>
                    Log Out
                </button>
            </Navbar>
        </div>
    )
}

export default Navigation