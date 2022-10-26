import axios from 'axios'
import React, {useEffect, useState} from 'react';
import FetchAPI from './FetchAPI';
import './HomeTiles.css';
import UpcomingShowsTile from './UpcomingShowsTile';

function UpcomingShows()
{

    const [series, setSeries] = useState([]);

    useEffect(() => {
        axios.request(FetchAPI.fetchUpcomingSeries).then(function (response) {
            console.log(response.data);
            setSeries(response.data.results);
        }).catch(function (error) {
            console.error(error);
        });

    }, []);

    return (
        <div className='pop-container'>
            <div className='main-titles'>
                Upcoming Series
            </div>
            <div className='p-movie-container'>
                {series.length > 0 && series.map((series) =>(
                    <UpcomingShowsTile key={series.id} {...series} />            
                ))}
            
            </div>
        </div>
    );
}

export default UpcomingShows;