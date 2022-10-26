import React, { Component } from 'react'
import Navigation from './Navigation'
import UpcomingMovies from './UpcomingMovies'


export default function Movies() {
    return (
        <>
            <Navigation />
            <div className ="container">
                <UpcomingMovies/>
            </div>
        </>
    )
}