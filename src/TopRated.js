import React,{useState,useEffect} from 'react';
import './TopRated.css';
import FetchAPI from './FetchAPI'
import axios from 'axios'
import TopRatedTile from './TopRatedTile';

function TopRated() {

  const [series, setSeries]=useState([]);

  useEffect(() => {
    axios.request(FetchAPI.fetchTopRatedShows).then(function (response) {
        console.log(response.data);
        setSeries(response.data.results);
    }).catch(function (error) {
        console.error(error);
    });

}, []);

  return (
    <>
    <div className="container">
    <div className='main-titles'>
                Top Rated Shows
            </div>
        <div className="grid">
    {series.length > 0 && series.map((series) =>(
                    <TopRatedTile key={series.id} {...series} />            
                ))}
    </div>
    </div>
    </>
   
  );
}

export default TopRated;