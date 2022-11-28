import React, { useState, useRef, useEffect } from "react";
import "./UserRev.css";
import {FaStar} from "react-icons/fa";
import { getAuth} from "firebase/auth";
import { addDoc, collection, getDoc, doc, setDoc} from "firebase/firestore";
import db from "../../firebase.js";
import { useAuthState } from 'react-firebase-hooks/auth';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}


function UserRev(titleID) {
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

    useEffect(() => {
        setWidth(span.current.offsetWidth);
      }, [ratingText]);

    async function getStar(){
        const docRef = doc(db, "stars", user.uid + "_" + test)
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
            console.log(user.uid +'_' + test + ' Does not exist!');
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
            setDoc(doc(db, "stars", user.uid + "_" +  test),{
                userID: user.uid,
                rating: currentValue,
                movie: test,
                text: ratingText,
            });
        }
    };

    return (
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
                <span id="hide" ref={span}>{ratingText}</span>
                <div><input type="text" autoFocus onChange={changeHandler} /></div>
            </wrapper>
            </div>
            <div><button onClick={getStar}>View rating</button><button onClick={submit}>Submit</button></div>
        </div>
    );
};



export default UserRev;