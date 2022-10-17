import { sendPasswordResetEmail } from 'firebase/auth';
import React , { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {auth, resetPassword} from '../firebase';
import './Reset.css'





function Reset(){

    const [email, setEmail] = useState('')
    
  
    // const resetPassword = () => {
    //   if(email){
    //     sendPasswordResetEmail(email).then(() => {
    //       email.current.value= "";
    //   });

    // }

    return(

        <div className="reset">
          <div className="reset__container">
            <h2 className='reset__header'>Enter Email</h2>
            <input
              type="text"
              className="reset__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeHolder="Email"
            />
            <button
            className="reset__btn"> SEND RESET EMAIL
            {/* // onClick={resetPassword}> Send Link</button> */}
            </button>
          
          </div>
        </div>
    );

}



export default Reset;