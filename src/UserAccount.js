import Navigation from './Navigation'
import React from "react"
import {useUserContext} from './userContext'
import './UserAccount.css'



const UserAccount = () => {
    const {user, logoutUser} = useUserContext("");

    return(
        <div className='UserAccount__container'>
            <div>

            <h1>User Profile</h1>
            <h2>Email: {user.email}</h2>
            <button className="UAlogout__btn" onClick={logoutUser}>Log out</button>

            </div>
        </div>

    );
}

export default UserAccount;