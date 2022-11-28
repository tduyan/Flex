import {Link, useNavigate} from 'react-router-dom'
import React, {useRef } from "react"
import {useUserContext} from './userContext'
import './UserAccount.css'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { Form,Button } from 'react-bootstrap';
import {logout} from "./firebase.js";
import { getAuth} from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import Navigation from './Navigation'

const UserAccount = () => {
    const newEmail = useRef();
    const newPsswd = useRef();
    const confirmPsswd = useRef();
    const auth = getAuth();
    const [user] = useAuthState(auth);
    const {logoutUser, updateUserEmail, updateUserPassword} = useUserContext("");

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
    const updatePassword = () => {
      const psswd = newPsswd.current.value;
      const psswd2 = confirmPsswd.current.value;

      if(psswd === psswd2){
        updateUserPassword(newPsswd.current.value);
      }else{
        alert("Passwords do not match");
      };
    };

    return(
        <div>
          <Navigation />
          <h1 className='header'>{user.email}</h1>
          <div className='UserAccount__container'>   
              <button className="AdminButton"><Link to="/AdminConsole">AdminConsole</Link></button>
          </div>
          <div className="updateEmail">
              <input  
              type="text"
              ref={newEmail}
              placeholder="Enter new email address..."
              />
          </div>
          <div className='updatePass'>
          <button className="UserAccountpsswd__btn"
              onClick={updateEmail}><Link to="/">Update Email</Link></button>
          </div>
          <div className='updatePass'>
              <input  
              type="text"
              ref={newPsswd}
              placeholder="Enter new password"
              />
          </div> 
          <div className='updatePass'>
            <input  
            type="text"
            ref={confirmPsswd}
            placeholder="Confirm new password"
            />
          </div>
          <div className='updatePass'>
              <button className="UserAccountpsswd__btn"
              onClick={updatePassword}><Link to="/">Update Password</Link></button>
          </div>
        </div>
    );
}

export default UserAccount;