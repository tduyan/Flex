import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from "./Firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import './Login.css';

function AddUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setconfPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (password.current.value !== confPassword.current.value) {
            //may trigger a loading screen
            return error("Passwords do not match");
        }
        
        if (user) navigate("/landingpage");
    }, [user, loading]);

    return (
    <div className="CreateAccount">
      <div className="CreateAccount__container">
        <input
          type="text"
          className="CreateAccount__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="CreateAccount__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
          <input
          type="confpassword"
          className="CreateAccount__textBox"
          value={confPassword}
          onChange={(e) => setconfPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button
          className="CreateAccount__btn"
          onClick={() => createUserWithEmailAndPassword(email, password, confPassword)}
        >
          Login
        </button>
        <div>
          Have an account? <Link to="/Login">Log in</Link>
        </div>
      </div>
      </div>
  );
}
export default AddUser;
