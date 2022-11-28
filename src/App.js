//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react'
import Login from './Login';
import Register from './Register';
import LandingPage from './LandingPage';
import AdminConsole from './AdminConsole';
import Home from './Home';
import Reset from './components/Reset';
import UserAccount from './UserAccount';
import TVShows from './TVShows';
import Movies from './Movies';
import UserRev from './components/UserReviews/UserRev';
import ActWiki from './ActWiki';
import MainBoard from './components/DiscussionBoard/mainBoard';
import DiscussionPost from './components/DiscussionBoard/discussionPost';

function App() {
    return (
        <div className="app">
            <h1>FLEX</h1>

                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/Home" element={<Home/>} />
                    <Route exact path="/AdminConsole" element={<AdminConsole/>} />
                    <Route exact path="/Register" element={<Register/>} />
                    <Route exact path="/Reset" element={<Reset/>} />
                    <Route exact path="/LandingPage" element={<LandingPage/>} />
                    <Route exact path="/UserAccount" element={<UserAccount/>} />
                    <Route exact path="/TVShows" element={<TVShows/>} />
                    <Route exact path="/Movies" element={<Movies/>} />
                    <Route exact path="/UserRev" element={<UserRev/>} />
                    <Route exact path='/MainBoard' element={<MainBoard/>} />
                    <Route exact path='/postBoard' element={<DiscussionPost/>} />
                    <Route exact path='/ActWiki' element={<ActWiki/>} />
                    
                </Routes>
                
        </div>
    )
}

export default App;