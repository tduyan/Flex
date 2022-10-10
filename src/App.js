import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import AddUser from "./AddUser"
import ForgotPassword from "./ForgotPassword"
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
                    <Route path="/landingpage"  component={LandingPage} />
                    <Route path="/AddUser" component={AddUser} />
                    <Route path="/login" component={Login} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;