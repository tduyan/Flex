import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import LandingPage from './LandingPage';


function App() {
    const [token, setToken] = useState();
    if(!token) {
        return <Login setToken={setToken} />
    }
    return (
        <div className="wrapper">
            <h1>Flex</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/landingpage">
                        <LandingPage />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;