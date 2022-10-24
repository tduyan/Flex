import React from 'react'
import Navigation from './Navigation'
import Popular from './Popular'
export default function Home(){

    return(
        <>
            <Navigation />
            <div className = 'logo'>
                Flex
            </div>
            <Popular />
        </>
    )
}
