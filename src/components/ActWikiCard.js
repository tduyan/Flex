import React, {useState} from 'react'
import "./ActWikiCard.css"
import {Modal, Button} from 'react-bootstrap'



const ActWikiCard = ({show, onClose, actorName, actorBio, actorPic}) => {
  const IMG_URL = "https://image.tmdb.org/t/p/original";

  if(!show) return null  
  
  return  ( 

    <>

      <Modal show ={show} animation={false}>
        <Modal.Header>
          <Modal.Title>{actorName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{actorBio}</Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    )
}

export default ActWikiCard         