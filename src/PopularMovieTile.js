import React, {useState} from 'react'
import './PopularMovieTile.css';
import { Button, Modal } from 'react-bootstrap';
import SaveMovie from './components/SaveMovie';
import { Save } from '@mui/icons-material';


const IMG_URL = "https://image.tmdb.org/t/p/original"

const PopularMovieTile = ({genre_ids, id, title, release_date, overview, vote_average, poster_path}) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    return (
        <>
        <div className='p-movie' onClick={handleShow}>
            <img src={IMG_URL + poster_path} alt={title} />
            <div className='img-overlay img-overlay--blur'>
                <div className="movie-title">{title}</div>
                <p className='overview'>{overview}</p>
            </div>
        </div>
        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                    <img className="card-img-top" style={{width:'14rem'}}src={IMG_URL+poster_path} />
                    </div>
                        <div className="title-details">
                            <p>Year: {release_date}</p>
                            <p>Rating: {vote_average}</p>
                            <p>Overview: {overview}</p>
                            <p>Genres: {genre_ids}</p>                        
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        Close
                    </Button>
                    <SaveMovie movieId={id}/>
                </Modal.Footer>
                </Modal>
            </>
        )
    }
    
    export default PopularMovieTile
