import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import './UpcomingShows.css'

const IMG_URL = "https://image.tmdb.org/t/p/original/"

const UpcomingShowsTile = ({name, first_air_date, overview, vote_average, poster_path}) => {
    
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
            <img src={IMG_URL + poster_path} alt={name} />
            <div className='img-overlay img-overlay--blur'>
                <div className="movie-title">{name}</div>
                <p className='overview'>{overview}</p>
            </div>
        </div>
        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <img className="title-img" src={IMG_URL + poster_path}></img>
                    </div>
                    <div className="title-details">
                        <p>Year: {first_air_date}</p>
                        <p>Rating: {vote_average}</p>
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

export default UpcomingShowsTile