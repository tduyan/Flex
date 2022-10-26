import {Link, useNavigate} from 'react-router-dom'
import React, {useRef } from "react"
import {useUserContext} from './userContext'
import './UserAccount.css'



const UserAccount = () => {
    const navigate = useNavigate()
    const newEmail = useRef();
    const {user, logoutUser, updateUserEmail} = useUserContext("");

    // const handleSubmit = async (e) =>{
    //     e.preventDefault();
    //     logoutUser();
    // }
    const updateEmail = () => {
        const email = newEmail.current.value;
        if(email){
          updateUserEmail(email).then(() => {
            newEmail.current.value= "";
          });
        };
      };
    
    return(
        <div>
        <div className='UserAccount__container'>
            <div>
            <h1>User Profile</h1>
            <h2>Email: {user.email}</h2>
            <button className="UAlogout__btn" onClick={logoutUser}>Log out</button>
            <button className="UAlogout__btn"><Link to="/AdminConsole">AdminConsole</Link></button>
            </div>
        </div>
        <div className="updateEmail">
            <input  
            type="text"
            className="UserAccount__textBox"
            ref={newEmail}
            placeholder="Enter new email address..."
            />
            <button className="UserAccount__btn"
            onClick={updateEmail}><Link to="/">Update Email</Link></button>
        </div>
        </div>
    );
}

export default UserAccount;