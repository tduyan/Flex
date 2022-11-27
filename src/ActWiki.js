import {React, useState} from "react";
import Navigation from './Navigation'
import axios from "axios";
import './ActWiki.css'
import ActWikiCard from './components/ActWikiCard'
import {Modal, Button} from 'react-bootstrap'

export default function ActWiki() {
    const IMG_URL = "https://image.tmdb.org/t/p/original";
    
    const [search, setSearch ] = useState("");
    const [actorList, setActorList] = useState([]);
    const [actorDetails, setActorDetails] = useState([]);
    const [openModal, setModalState] = useState(false);
    const [show, setShow] = useState(false);
    
    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    async function handleActorClick(id){
        try{
            const actorsInfo = await searchActor(id)
            await setActorDetails(actorsInfo)
        }
        catch(err){
            console.log(err)
        }
    }
    
    
   async function actorSearchButton(){
    try{
        const searchPeopleAPI = await apiStringBuilder();
        const actorId = await getActorId(searchPeopleAPI);
        await setActorList(actorId)
    }
    catch(err){
        console.log(err)
    }
   }
    
    const  searchActor = async (people_Id) => {
       return await axios.get('https://api.themoviedb.org/3/person/'+people_Id+'?api_key=3042596271957c60477b546b2ecf2677&language=en-US')
        .then(({data})=>{
           return data           
        })
        .catch(err =>{
            console.error(err);
        });
    }

    const apiStringBuilder = () => {
        const query = JSON
            .stringify(search)
            .replaceAll(' ', '%20')
            .replaceAll('"', '');
        const build_URL = 'https://api.themoviedb.org/3/search/person?api_key=3042596271957c60477b546b2ecf2677&language=en-US&query='+query+'&page=1&include_adult=false';
        return build_URL;
    }

    const getActorId = async (URL) => {
        return await axios.get(URL)
        .then(({data}) => {      
            return data.results          
        })
        .catch(err => {
            console.error(err);
        })
    }

    const handleModal = () => {
        
        setModalState(true)
    }
   
    return (
        <>
        <Navigation/>           
        <div className="act-container">            
            <h1 className="main-titles"> Search Actor</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div class="input-group mb-3">
                     <input 
                     
                     type="text" 
                     class="form-control" 
                     placeholder="Search Actors Name" 
                     aria-label="Search Actors Name" 
                     aria-describedby="button-addon2"
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                     />
                     
                    <div class="input-group-append">
                    
                    <button class="btn btn-outline-secondary" 
                    type="button" 
                    id="button-addon2"
                    onClick={ async () => {
                        if(search =="")
                            return alert("Search Actor")
                        await actorSearchButton()
                         
                    }}
                    >Search</button>
                    </div>
                    </div>         
                </form>
            </div>
            
               <div>
               
                <ul>
                {actorList.map((actors) => (
                   
                    <li
                    onClick={async  () => {
                        await handleActorClick(actors.id)
                        await handleShow()
                        await console.log()
                    }
            
                    }
                    key={actors.name}>
                      <img id="actor__Image" src={IMG_URL+actors.profile_path}></img> {actors.name}
                      
                        
                    </li>
                ))}   

                </ul>
                <Modal show={show} onHide={handleClose} animation={true}>
                        <Modal.Header closeButtton>
                        <Modal.Title>{actorDetails.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{actorDetails.biography}</Modal.Body>
                        <Modal.Footer>
                        <Button data-dismiss="modal" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
               </div>
        
        </div>        
        
        </>
    )
}