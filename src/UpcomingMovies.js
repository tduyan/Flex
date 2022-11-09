import React,{useState,useEffect} from 'react';
import './UpcomingMovies.css';
import UpcomingMovieTile from './UpcomingMovieTile';
import FetchAPI from './FetchAPI'
import axios from 'axios'

function UpcomingMovies() {

  const [movies, setMovies]=useState([]);

  useEffect(() => {
    axios.request(FetchAPI.fetchUpcomingMovies).then(function (response) {
        console.log(response.data);
        setMovies(response.data.results);
    }).catch(function (error) {
        console.error(error);
    });

}, []);

  return (
    <>
    <div className="container">
    <div className='main-titles'>
                Upcoming Movies
            </div>
        <div className="grid">
    {movies.length > 0 && movies.map((movies) =>(
                    <UpcomingMovieTile key={movies.id} {...movies} />            
                ))}
    </div>
    </div>
    </>
   
  );
}

export default UpcomingMovies;