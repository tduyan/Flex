import {React, useState }from 'react'
import axios from 'axios'




const SearchMovieSeries = () => {

const [movies, setMovies] = useState([]);
const [query, setQuery] = useState('');

const grabMovies = async () => {

    axios.get('')
    .then()
    .catch()
    
}

const handleSubmit = (e) =>{
    e.preventDefault();
}



return (
    
    

   <div className="container">
    <div>
        <div className="">

        <form onClick={handleSubmit}>
        <input 
        type="text"
        value={query}
        className=""
        placeHolder="Search Title"
        onChange={(e)=> {
            setQuery(e.target.value)
        }}

        />

        <button> Click me</button>

        </form>
        </div>
        <h1>{query}</h1>
       </div>
   </div>


        
)

}

export default SearchMovieSeries