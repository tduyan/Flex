import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { db } from '../firebase';
import {addDoc, doc, setDoc, collection, arrayUnion, updateDoc, getDoc} from 'firebase/firestore';
import {useAuthState} from 'react-firebase-hooks/auth';
import {getAuth} from 'firebase/auth'


const SaveMovie = (movieId) => {

const auth = getAuth();
const [user] = useAuthState(auth);

const handleSaveClick = async (movie) => {

   
    try{
        const docRef = doc(db, 'moviesWatched', user.uid)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
           await updateDoc(docRef, {
            id: arrayUnion(movie)
        })
        } else{
            setDoc(docRef,{
                id: arrayUnion(movie)
            })
        }

        console.log("Document written with ID: ", docRef.id)
    }catch (e){
        console.error("Error adding document")
    }
}

return(


    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Seen this?
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <Dropdown.Item onClick={()=> handleSaveClick(movieId)}>Watched</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item >Watch Later</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

}

export default SaveMovie


