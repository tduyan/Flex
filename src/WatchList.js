import {React , useEffect, useState} from 'react'
import{doc, getDoc} from 'firebase/firestore'
import { db } from './firebase';
import {useUserContext} from './userContext'
import axios from 'axios';
import Navigation from './Navigation';
import "./WatchList.css"

export default function WatchList() {
    const IMG_URL = "https://image.tmdb.org/t/p/original";
const [movieList, setMovieList] = useState([])
const {user} = useUserContext();
const [movieDetails] = useState([])

const getMovies = async () => {
    try{
        const docRef = doc(db, "savedMovies", user.uid)
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
        if(!movieDetails.includes(data))
            movieDetails.push(data)
        else{
            return
        }
    })
    .catch(err=>{
        console.error(err);
    })
}

const loadMovies = () =>{
    getMovies()
    Promise.all(
        movieList.map((movies)=>{
            console.log(movies.movieId)
            getMovieData(movies.movieId)
        })
    )
}

return (
    <>
    <Navigation/>
    <div className="watch-container"> 
        <div className="watch-title">
            <h1>Watched Movies</h1>
        </div>
        <button 
        onClick={loadMovies}
        className="btn_watch_movies"
        >Saved Movies</button>
        <div className="watch-list">
            <ul>
                {movieDetails.map((movies)=>(
                    <li key={movies.original_title}>
                        <h3>{movies.original_title}</h3>
                        <img className="save_movie_poster"src={IMG_URL+movies.poster_path}></img>
                    </li>
                ))}
               
            </ul>
        </div>
    </div>
    </>
)

}