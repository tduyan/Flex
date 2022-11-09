import {React, useEffect, useState} from "react";
import axios from "axios";
import './ActWiki.css'


export default function ActWiki() {
    const IMG_URL = "https://image.tmdb.org/t/p/original";
    
    const [search, userSearch ] = useState("");
    const [apiQuery, setApiQuery] = useState('');
    const [actorId, setActorId] = useState('');
    const [actorName, setActorName] = useState('');
    const [imgPath, setImgPath] = useState('');
   
    
    const  searchActor = async (people_Id) => {
       return await axios.get('https://api.themoviedb.org/3/person/'+people_Id+'?api_key=3042596271957c60477b546b2ecf2677&language=en-US')
        .then(({data})=>{
   
            return data;
        })
        .catch(err =>{
            console.error(err);
        });
    }

    const apiStringBuilder = () => {
        const query = JSON.stringify(search).replaceAll(' ', '%20').replaceAll('"', '');
        const build_URL = 'https://api.themoviedb.org/3/search/person?api_key=3042596271957c60477b546b2ecf2677&language=en-US&query='+query+'&page=1&include_adult=false';
        setApiQuery(build_URL);
    }

    const getActorId = async (URL) => {
        return await axios.get(URL)
        .then(({data}) => {
            setActorId(data.results[0].id);
            return data;
        })
        .catch(err => {
            console.error(err);
        })
    }
   
    return (
        <div className="container">
            <div>

          
                <input
                id='userSearch'
                type="text"
                placeHolder="Search Actor/Actress"
                onChange={() => {
                   userSearch(document.getElementById("userSearch").value)
                   apiStringBuilder();
                   getActorId(apiQuery);
                }}
                />
                <button onClick={ () => {
     
                    searchActor(actorId).then(actorData =>{
                        setActorName(actorData.name);
                        setImgPath(actorData.profile_path);
                    })

                }}>Search</button>
            
            
            </div>
                <div className="actor__Header">
                    <h1>{actorName}</h1>
                </div>
            <div className="actor__Image" >
                <p>
                    <img 
                    src={IMG_URL + imgPath} 
                    ></img>
                </p>
            </div>
            
        </div>             

    )
}