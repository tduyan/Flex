import React, { Component } from 'react'
import Navigation from './Navigation'
import WatchListShows from './WatchListShows'

export default function TVShows() {
    return (
        <>
            <Navigation />
            <div className ="container">
                <WatchListShows/>
            </div>
        </>
    )
}