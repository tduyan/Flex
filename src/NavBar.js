import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Navbar() {
    return (
            <nav className='navBar'>
                <div className='navbar-container'>
                    <Link className="color-style" to="/">Home</Link> <span></span>
                    <Link className="color-style" to="/">TV Shows</Link> <span></span>
                    <Link className="color-style" to="/">Movies</Link> <span></span>
                    <Link className="color-style" to="/">ActWiki</Link> <span></span>
                    <Link className="color-style" to="/">WatchHistory</Link> <span></span>
                    <Link className="color-style" to="/">WatchList</Link> <span></span>
                    <Link className="color-style" to="/">Account</Link> <span></span>
                    <Link className="color-style" to="/">Log Out</Link> <span></span>
                </div>
            </nav>
            
    );
}

export default Navbar;