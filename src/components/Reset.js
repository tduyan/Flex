import {useUserContext} from '../userContext';
import React , {useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Reset.css'


const Reset = () =>{

    const emailRef = useRef(); 
    const {forgotPassword} = useUserContext();
    
  
    const resetPassword = () => {
      const email = emailRef.current.value;
      if(email){
        forgotPassword(email).then(() => {
          emailRef.current.value= "";
          console.log(email)
        });
      };
    };

    return(

        <div className="reset">
          <div className="reset__container">
            <h2 className='reset__header'>Enter Email</h2>
            <input
              type="text"
              className="reset__textBox"
              ref={emailRef}
              placeholder="Email"
            />
            <button className="reset__btn"
            onClick={resetPassword}>Send Reset Link</button>

          </div>
        </div>
    );

}

export default Reset;

