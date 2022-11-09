import React, { Component } from 'react'
import Navigation from './Navigation'
import TopRated from './TopRated'

export default function TVShows() {
    return (
        <>
            <Navigation />
            <div className ="container">
                <TopRated/>
            </div>
        </>
    )
}