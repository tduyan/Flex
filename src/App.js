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
                <Routes>
                    <Route exact path="/AdminConsole" element={<AdminConsole/>} />
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/Register" element={<Register/>} />
                    <Route exact path="/LandingPage" element={<LandingPage/>} />
                </Routes>
        </div>
    )
}

export default App;