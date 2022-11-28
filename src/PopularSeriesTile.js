import React, {useState, useRef, useEffect} from 'react'
import './PopularSeriesTile.css';
import { Button, Modal } from 'react-bootstrap';
import {FaStar} from "react-icons/fa";
import { getAuth} from "firebase/auth";
import { addDoc, collection, getDoc, doc, setDoc} from "firebase/firestore";
import db from "./firebase.js";
import { useAuthState } from 'react-firebase-hooks/auth';

const IMG_URL = "https://image.tmdb.org/t/p/original/"

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}

const PopularSeriesTile = ({genre_ids, name, first_air_date, overview, vote_average, poster_path}) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    const auth = getAuth();
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);
    const [user] = useAuthState(auth);
    const test = "Dunkirk";
    const [ratingText, setText] = useState("");
    const [width, setWidth] = useState(0);
    const span = useRef();
    var bool;
    var newVal;


    async function getStar(){
        const docRef = doc(db, "stars", user.uid + "_" + name)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log('Document data:', docSnap.data());
            console.log("true");
            //console.log(docSnap.data());
            bool = true;
            newVal = docSnap.data().rating;
            setCurrentValue(newVal);
            setText(docSnap.data().text);
        } else {
            console.log(user.uid +'_' + name + ' Does not exist!');
            console.log();
            bool = false;
        }
    }
    const changeHandler = evt => {
        setText(evt.target.value);
    };
    const handleClick = value => {
        setCurrentValue(value)
    };

    const handleMouseOver = value => {
        setHoverValue(value);
    }

    const handleMouseLeave = value => {
        setHoverValue(undefined)
    }
    
    const submit = () => {
        if (bool === true) {
            console.log("fdsaaafsdsfdafd");
        } else {
            console.log('No such document!');
            setDoc(doc(db, "stars", user.uid + "_" +  name),{
                userID: user.uid,
                rating: currentValue,
                movie: name,
                text: ratingText,
            });
        }
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
                    <img className="card-img-top" style={{width:'14rem'}}src={IMG_URL+poster_path} />
                    </div>
                    <div className="title-details">
                        <p>Year: {first_air_date}</p>
                        <p>Rating: {vote_average}</p>
                        <p>Overview: {overview}</p>
                        <p>Genres: {genre_ids}</p>                        
                    </div>
                    <div className="container">
                    <div className="stars">
                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={24}
                                    style={{
                                        marginRight: 10,
                                        cursor: "pointer"
                                    }}
                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                />
                            )
                        })}
                    </div>
                        <div>
                        <wrapper>
                            <span id="hide">{ratingText}</span>
                            <div><input type="text" autoFocus onChange={changeHandler} /></div>
                        </wrapper>
                        </div>
                        <div><button onClick={getStar}>View rating</button><button onClick={submit}>Submit</button></div>
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

export default PopularSeriesTile