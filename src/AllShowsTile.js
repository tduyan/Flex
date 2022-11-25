import React, {useState} from 'react'
import './TopRated.css';
import { Button, Modal } from 'react-bootstrap';
import SaveShows from './SavedShows';


const IMG_URL = "https://image.tmdb.org/t/p/original"

const AllShowsTile = ({title, vote_average, overview, poster_path}) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    return (
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
              <img className="card-img-top" src={IMG_URL+poster_path} />
              <div className="card-body">
                  <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}}src={IMG_URL+poster_path} />
                      <h3>{title}</h3>
                      <h4>Rating: {vote_average}</h4>
                      <br></br>
                      <h5>Overview</h5>
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary">Save</Button>  
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
        </div>
    )

    }
    
    export default AllShowsTile;
