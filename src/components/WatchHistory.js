import {React , useEffect, useState} from 'react'
import{doc, getDoc} from 'firebase/firestore'
import {useAuthState} from 'react-firebase-hooks/auth';
import {getAuth} from 'firebase/auth'
import { db } from '../firebase';
import {useUserContext} from '../userContext'
import Movies from '../Movies';
import axios from 'axios';


const WatchedHistory = () => {


const [movieList, setMovieList] = useState([])
const {user} = useUserContext();
const [movieDetails] = useState([])

const getMovies = async () => {
    try{
        const docRef = doc(db, "moviesWatched", user.uid)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()){
            console.log("Document data: ", docSnap.data().id)
            setMovieList(docSnap.data().id)
        } else{
            console.log("No such document!")
        }
    }catch(e){

        console.error("Error loading doc" + user)
    }

}

const getMovieData = async (id) => {
    await axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=3042596271957c60477b546b2ecf2677&language=en-US")
    .then(({data})=>{
        movieDetails.push(data)
        console.log("moviedata")
    })
    .catch(err=>{
        console.error(err);
    })
}

const loadMovies = async () =>{
    await Promise.all(
        movieList.map((movies)=>{
            console.log(movies.movieId)
            getMovieData(movies.movieId)
        })
    )
    
    
}

const onLoad = async () =>{
    await getMovies()
    
}


useEffect( async ()=>{
    await getMovies()
    
}, [])
return (
    <div className="watch-container">
        <div className="watch-title">
            <h1 onClick={loadMovies}>Watched Movies</h1>
        </div>
        <div className="watch-list">
            <ul>
                <li></li>
            </ul>

        </div>

    </div>
)

}

export default WatchedHistory