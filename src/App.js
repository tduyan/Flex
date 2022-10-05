import React from "react"
import Home from './Home'
import TVShows from './TVShows'
import Movies from './Movies'
import ActWiki from './ActWiki'
import UserAccount from './UserAccount'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'



function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/tvshows" element={<TVShows />} />
                    <Route exact path="/movies" element={<Movies />} />
                    <Route exact path="/actwiki" element={<ActWiki />} />
                    <Route exact path="/useracount" element={<UserAccount />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;