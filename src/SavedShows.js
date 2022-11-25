import React from 'react'
import Navigation from './Navigation'
import SavedList from './SavedList'

export default function TVShows() {
    return (
        <>
            <Navigation />
            <div className ="container">
                <SavedList />
            </div>
        </>
    )
}