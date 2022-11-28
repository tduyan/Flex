import React, {useState}from 'react'
import "./ActWikiCard.css"
import {Modal, Button} from 'react-bootstrap'





const ActWikiCard = ({show, onClose, actorName, actorBio}) => {
  const IMG_URL = "https://image.tmdb.org/t/p/original";

  
  
  return (
    <>
      <Modal show={show} animation={true}>
        <Modal.Header>
          <Modal.Title>{actorName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{actorBio}</Modal.Body>
        <Modal.Footer>
          <Button data-dismiss="modal" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
       {/* <div onClick={onClose}>                     
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >

        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className="modal-title">
            <h2 className="modal-header">{actorName}</h2>
          </div>
          <div className='content'>
            <p className="actor-bio">{actorBio}</p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary' onClick={onClose}>
             Close
           
             
            </button>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default ActWikiCard         