import axios from "axios";
import React, { useState, useEffect } from "react";
import PopularMovieTile from './PopularMovieTile';
import FetchAPI from './FetchAPI';

function Search() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["title", "original_title"]);
    const [filterParam, setFilterParam] = useState(["All"]);

    useEffect(() => {
        axios.request(FetchAPI.fetchPopularMovies).then(function (response) {
            //console.log(response.data);
            setItems(response.data.results);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    const data = Object.values(items);
    // console.log(data);
    //console.log(items)

    function search(items) {
        return items.filter((item) => {
            if (item.title === filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }
        return (
            <div className="wrapper">
                <div className="search-wrapper">
                    <label htmlFor="search-form">
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Search for..."
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                        <span className="sr-only">Search movies here</span>
                    </label>

                </div>
                <div className='pop-container'>
                    <div className="main-titles">
                        <div className="p-movie-container">
                            {search(data).map((item) => (
                                    <PopularMovieTile key={item.title} {...item}/>
                            ))}
                        </div>
                    </div>
                 </div>
            </div>
        );
}

export default Search

/*<img
                                        src={item.flag.large}
                                        alt={item.name}
                                    />*/

 /*useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=3042596271957c60477b546b2ecf2677&language=en-US&sort_by=popularity.desc"
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
    
     else if (filterParam === "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
            
                                    <div className="p-movie-container">
                                    <h2 className="tile-name">{item.title}</h2>
                                </div>
                                
                                                <div className='pop-container'>
                    {search(data).map((item) => (
                            <div className="main-titles" key={item.title}>
                                <div className="p-movie-container">
                                    <PopularMovieTile key={item.title}/>
                                </div>
                            </div>
                    ))}
                </div>*/