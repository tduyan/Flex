import React,{useState,useEffect} from 'react';
import './TopRated.css';
import FetchAPI from './FetchAPI';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import AllShowsTile from './AllShowsTile';
import SavedShows from './SavedShows';

function WatchListShows() {

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
          All Shows
      </div>
      <div className="d-inline p-2 text-white ml-auto">
        <Button variant="outline-warning">
          Saved
        </Button>
      </div>
      <div className="grid">
          {series.length > 0 && series.map((series) =>(
            <AllShowsTile key={series.id} {...series} />            
          ))}
      </div>
    </div>
    </> 
  );
}

export default WatchListShows;