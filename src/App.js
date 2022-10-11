//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react'
import Login from './Login';
//import LandingPage from './LandingPage';


function App() {
    return (
        <div className="app">
            <h1>FLEX</h1>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;