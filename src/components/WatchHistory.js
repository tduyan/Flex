import {React , useEffect, useState} from 'react'
import{doc, getDoc} from 'firebase/firestore'
import {useAuthState} from 'react-firebase-hooks/auth';
import {getAuth} from 'firebase/auth'
import { db } from '../firebase';



const WatchedHistory = (user) => {
    
const [movieList, setMovieList] = useState([])


const getMovies = async () => {
    try{
        const docRef = doc(db, "moviesWatched", user)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()){
            console.log("Document data: ", docSnap.data().id)
            // setMovieList(docSnap.data().id)
        } else{
            console.log("No such document!")
        }
    }catch(e){

        console.error("Error loading doc")
    }
    
useEffect = () => {
    getMovies()
}
}
return (
    <div className="watch-container">
        <div className="watch-title">
            <h1>Watched Movies</h1>
        </div>
        <div className="watch-list">
            <ul>
                <li>movieList</li>
            </ul>

        </div>

    </div>
)

}

export default WatchedHistory