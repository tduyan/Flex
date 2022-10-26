import React, { Component } from 'react'
import Navigation from './Navigation'
import UpcomingShows from './UpcomingShows'

export default function TVShows() {
    return (
        <>
            <Navigation />
            <div className ="container">
                <UpcomingShows/>
            </div>
        </>
    )
}