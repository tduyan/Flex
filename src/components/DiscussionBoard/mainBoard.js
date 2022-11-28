import React, { useState, useRef, useEffect } from "react";
import './mainBoard.css';
import {FaStar} from "react-icons/fa";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getDoc, doc, setDoc, where, query, getDocs, onSnapshot} from "firebase/firestore";
import {db, logout} from "../../firebase.js";
import { useAuthState } from 'react-firebase-hooks/auth';
import 'bootstrap/dist/css/bootstrap.css';
import { render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { Form,Button } from 'react-bootstrap';
import firebase from 'firebase/compat/app';

function MainBoard(movieTitle){
    const MIN_TEXTAREA_HEIGHT = 32;
    const auth = getAuth();
    const [user] = useAuthState(auth);
    const [messageText, setText] = useState("");
    const movieTitleTest = "Dunkirk";
    const textareaRef = React.useRef(null);
    const [value, setValue] = React.useState("");
    const onChange = (event) => setValue(event.target.value);
    const [posts, setPosts] = useState([])

    React.useLayoutEffect(() => {
        // Reset height - important to shrink on delete
        textareaRef.current.style.height = "inherit";
        // Set height
        textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        MIN_TEXTAREA_HEIGHT
        )}px`;
    }, [value]);
    
    async function getBoard(){
        const docRef = doc(db, "board", movieTitleTest)
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log('Document data:', docSnap.data());
            console.log("true");
            //console.log(docSnap.data());
            setText(docSnap.data().text);
            for (var key in docSnap.data()) {
                console.log(key.Time);
                setPosts(docSnap.data().text, docSnap.data().Time, docSnap.data().user);
            }
        } else {
            console.log(user.uid +'_' + test + ' Does not exist, creating doc!');
            console.log();
        }
    }


    const submit = () => {
        console.log('No such document!');
        setDoc(doc(db, "board", movieTitleTest),{
            user: user.uid,
            Time: firebase.firestore.Timestamp.now(),
            text: value,
        });
    };
    getBoard();
    return(
        <div className="board">
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Home">
                            Home
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/TVShows">
                            TV Shows
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Movies">
                            Movies
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/ActWiki">
                            ActWiki
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <NavLink className="d-inline p-2 bg-dark text-white ml-auto" to="/UserAccount">
                    Account
                </NavLink>
                <button className="d-inline p-2 bg-dark text-white ml-auto" onClick={logout}>
                    Log Out
                </button>
            </Navbar>
            <div className="itemTitle"><h1>{movieTitleTest}</h1></div>
            <div>{messageText}</div>
            <ul className="user-posts">{posts}</ul>
            <div className="container">
                    <textarea
                    onChange={onChange}
                    ref={textareaRef}
                    style={{
                        minHeight: MIN_TEXTAREA_HEIGHT,
                        resize: "none"
                    }}
                    value={value}
                    />
                <div><button className="textButton" onClick={submit}>Submit</button></div>
            </div>
            <div className="bottom"></div>
        </div>
        );
};

export default MainBoard;