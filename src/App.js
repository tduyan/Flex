//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react'
import Login from './Login';
import Register from './Register';
import LandingPage from './LandingPage';
import AdminConsole from './AdminConsole';


function App() {
    return (
        <div className="app">
            <h1>FLEX</h1>
            <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<AdminConsole/>} />
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/" element={<Register/>} />
                    <Route exact path="/" element={<LandingPage/>} />
                </Routes>
            </Router>
            </div>
        </div>
    )
}

export default App;