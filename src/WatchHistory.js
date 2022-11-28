import {React , useEffect, useState} from 'react'
import{doc, getDoc} from 'firebase/firestore'
import { db } from './firebase';
import {useUserContext} from './userContext'
import axios from 'axios';
import Navigation from './Navigation';


export default function WatchHistory() {

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
    <>
    <Navigation/>
    <div className="watch-container"> 
        <div className="watch-title">
            <h1>Watched Movies</h1>
        </div>
        <button>Watched Movies</button>
        <div className="watch-list">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
    </>
)

}

