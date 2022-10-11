//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react'
import Login from './Login';
import AddUser from './AddUser';
import LandingPage from './LandingPage';


function App() {
    return (
        <div className="app">
            <h1>FLEX</h1>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/" element={<AddUser/>} />
                    <Route exact path="/" element={<LandingPage/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;