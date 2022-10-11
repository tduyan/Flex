import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "./Firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import './AdminConsole.css';
import Sidebar from './components/AdminSidebar';
import LandingPage from './LandingPage';
import UserList from "./UserList";
import Navbar from './components/AdminNavbar/AdminNavBar';
import Widget from './components/AdminWidgets/Widget';

function AdminConsole() {
    return(
        <div className="AdminConsole">
            <Sidebar />
            <div className="adminContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type = "user" />
                </div>
            </div>
        </div>
    );
}
export default AdminConsole;
