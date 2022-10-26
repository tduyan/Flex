import {Link, useNavigate} from 'react-router-dom'
import React from "react"
import {useUserContext} from './userContext'
import './UserAccount.css'



const UserAccount = () => {
    const navigate = useNavigate()
    const {user, logoutUser} = useUserContext("");

    // const handleSubmit = async (e) =>{
    //     e.preventDefault();
    //     logoutUser();
    // }
    
    return(
        <div className='UserAccount__container'>
            <div>

            <h1>User Profile</h1>
            <h2>Email: {user.email}</h2>
            <button className="UAlogout__btn" onClick={logoutUser}>Log out</button>
            <button className="UAlogout__btn"><Link to="/AdminConsole">AdminConsole</Link></button>
            </div>
        </div>

    );
}

export default UserAccount;