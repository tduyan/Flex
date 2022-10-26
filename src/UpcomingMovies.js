import axios from 'axios'
import React, {useEffect, useState} from 'react';
import FetchAPI from './FetchAPI';
import './HomeTiles.css';
import UpcomingMovieTile from './UpcomingMovieTile';

function UpcomingMovies()
{

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.request(FetchAPI.fetchUpcomingMovies).then(function (response) {
            console.log(response.data);
            setMovies(response.data.results);
        }).catch(function (error) {
            console.error(error);
        });

    }, []);

    return (
        <div className='pop-container'>
            <div className='main-titles'>
                Upcoming Movies
            </div>
            <div className='p-movie-container'>
                {movies.length > 0 && movies.map((movie) =>(
                    <UpcomingMovieTile key={movie.id} {...movie} />            
                ))}
            
            </div>
        </div>
    );
}

export default UpcomingMovies;