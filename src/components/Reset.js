import { sendPasswordResetEmail } from 'firebase/auth';
import React , { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {auth, resetPassword} from '../firebase';
import {AuthContext} from '../AuthContext';




function Reset(){

    const [email, setEmail] = useState('')
    
  
    const resetPassword = () => {
      if(email){
        sendPasswordResetEmail(email).then(() => {
          email.current.value= "";
      });

      };

    return(

        <div className="reset">
          <div className="reset__container">
            <input
              type="text"
              className="reset__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeHolder="Email"
            />
            <button
            className="reset__btn"
            onClick={resetPassword}> Send Link</button>
            
          </div>
        </div>
    );

}

}

export default Reset;