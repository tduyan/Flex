import axios from 'axios'
import React, {useEffect, useState} from 'react';
import FetchAPI from './FetchAPI';
import './HomeTiles.css';
import PopularMovieTile from './PopularMovieTile';
import PopularSeriesTile from './PopularSeriesTile';

function Popular()
{
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    useEffect(() => {
        axios.request(FetchAPI.fetchPopularMovies).then(function (response) {
            console.log(response.data);
            setMovies(response.data.results);
        }).catch(function (error) {
            console.error(error);
        });
    

        axios.request(FetchAPI.fetchPopularSeries).then(function (response) {
            console.log(response.data);
            setSeries(response.data.results);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        <div className='pop-container'>
            <div className='main-titles'>
                Popular Movies
            </div>
            <div className='p-movie-container'>
                {movies.length > 0 && movies.map((movie) =>(
                    <PopularMovieTile key={movie.id} {...movie} />            
                ))}
            
            </div>

            <div className='main-titles'>
                Popular Series
            </div>
            <div className='p-series-container'>
                {series.length > 0 && series.map((serie) =>(
                    <PopularSeriesTile key={serie.id} {...serie} />            
                ))}
            </div>  

        </div>
    );
}

export default Popular;