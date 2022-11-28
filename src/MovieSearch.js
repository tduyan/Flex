import axios from "axios";
import React, { useState, useEffect } from "react";
import './MovieSearch.css';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import './PopularMovieTile.css';

function MovieSearch() {
    const [apiQuery, setApiQuery] = useState('');
    const [movieId, setMovieId] = useState('');
    const [serieId, setSerieId] = useState('');
    const [searchParam] = useState(["title", "original_title"]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [searchFor, searchForm] = useState("");
    const [q, setQ] = useState("");
    const [show, setShow] = useState(false);
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');
    const [overview, setOverview] = useState('');
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [modalShow, setModalShow] = React.useState(false);

    const IMG_URL = "https://image.tmdb.org/t/p/original"

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    const searchMovie = async (movie_id) => {
        return await axios.get('https://api.themoviedb.org/3/movie/'+movie_id+'?api_key=3042596271957c60477b546b2ecf2677&language=en-US')
        .then(({data}) => {
            console.log(data);
            return data;
        })
        .catch(err => {
            console.error(err);
        })
    }

    const searchSerie = async (tv_id) => {
        return await axios.get('https://api.themoviedb.org/3/movie/'+tv_id+'?api_key=3042596271957c60477b546b2ecf2677&language=en-US')
        .then(({data}) => {
            console.log(data);
            return data;
        })
        .catch(err => {
            console.error(err);
        })
    }

    const apiMovieStringBuilder = () => {
        const query = JSON.stringify(searchFor).replaceAll(' ', '%20').replaceAll('"','');
        const build_URL = 'https://api.themoviedb.org/3/search/movie?api_key=3042596271957c60477b546b2ecf2677&language=en-US&query='+query+'&page=1&include_adult=false';
        setApiQuery(build_URL);
        //console.log(apiQuery);
    }

    const apiSerieStringBuilder = () => {
        const query = JSON.stringify(searchFor).replaceAll(' ', '%20').replaceAll('"','');
        const build_URL = 'https://api.themoviedb.org/3/search/tv?api_key=3042596271957c60477b546b2ecf2677&language=en-US&query='+query+'page=1&include_adult=false';
        setApiQuery(build_URL);
        //console.log(apiQuery);
    }

    const getMovieId = async (URL) => {
        return await axios.get(URL)
        .then(({data}) => {
            setMovieId(data.results[0].id);
            //setItems(data);
            //console.log(movieId);
            return data;
        })
        .catch(err => {
            console.error(err);
        })
    }

    const getSerieId = async (URL) => {
        return await axios.get(URL)
        .then(({data}) => {
            setSerieId(data.results[0].id);
            //setItems(data);
            //console.log(movieId);
            return data;
        })
        .catch(err => {
            console.error(err);
        })
    }

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

    function DisplayMovie(movieData) {
        return (
            <>
            {/* <div className='p-movie' onClick={handleShow}>
            <img src={movieData.poster_path} alt={movieData.title} />
            <div className='img-overlay img-overlay--blur'>
                <div className="movie-title">{movieData.title}</div>
                <p className='overview'>{movieData.overview}</p>
            </div>
        </div> */}
        <Modal 
            {...movieData}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <img className="title-img" style={{width:'14rem'}}src={IMG_URL+poster}></img>
            </div>
                <div className="title-details">
                    <p>Year: {year}</p>
                    <p>Rating: {rating}</p>
                    <p>Overview: {overview}</p>                   
                </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
                Close
            </Button>
        </Modal.Footer>
        </Modal>
        </>
        )
    }

    function DisplaySerie(serieData) {
        return (
            <>
            {/* <div className='p-movie' onClick={handleShow}>
            <img src={movieData.poster_path} alt={movieData.title} />
            <div className='img-overlay img-overlay--blur'>
                <div className="movie-title">{movieData.title}</div>
                <p className='overview'>{movieData.overview}</p>
            </div>
        </div> */}
        <Modal 
            {...serieData}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <img className="title-img" style={{width:'14rem'}}src={IMG_URL+poster}></img>
            </div>
                <div className="title-details">
                    <p>Year: {year}</p>
                    <p>Rating: {rating}</p>
                    <p>Overview: {overview}</p>                   
                </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
                Close
            </Button>
        </Modal.Footer>
        </Modal>
        </>
        )
    }

        return (
            <>
            <div className="d-flex">
                <div className="search-wrapper">
                    <label htmlFor="search-form">
                        <input
                            type="search"
                            name="searchform"
                            id="searchform"
                            className="search-input"
                            placeholder="Search for..."
                            onChange={() => {
                                searchForm(document.getElementById("searchform").value);
                                apiMovieStringBuilder();
                                getMovieId(apiQuery);
                                // apiSerieStringBuilder();
                                // getSerieId(apiQuery);
                            }}
                        />
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">Search</Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item variant="secondary" onClick={() => {
                            searchMovie(movieId).then(movieData => {    
                                setModalShow(true)
                                setTitle(movieData.title);
                                setPoster(movieData.poster_path);
                                setYear(movieData.release_date);
                                setRating(movieData.vote_average);
                                setOverview(movieData.overview);
                            });
                        }}>Search Movie</Dropdown.Item>
                        <DisplayMovie
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <Dropdown.Divider />
                        <Dropdown.Item variant="secondary" onClick={() => {
                            searchSerie(serieId).then(serieData => {    
                                setModalShow(true)
                                setTitle(serieData.title);
                                setPoster(serieData.poster_path);
                                setYear(serieData.release_date);
                                setRating(serieData.vote_average);
                                setOverview(serieData.overview);
                            });
                        }}>Search Series</Dropdown.Item>
                        <DisplaySerie
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        </Dropdown.Menu>
                        </Dropdown>
                    </label>
                </div>
            </div>
        </>
        );
}

export default MovieSearch

// {
//     setYear(movieData.year);
//     setRating(movieData.rating);
//     setOverview(movieData.overview);
//     setGenres(movieData.genre_ids);
// }