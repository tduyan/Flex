import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import './Register.css';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setconfPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            //maye trigger a loading screen
            return;
        }
        if (user) navigate("/Login");  
    }, [user, loading]);

    return (
    <div className="Register">
      <div className="Register__container">
        <input
          type="text"
          className="Register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="Register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password: 6 Characters or more"
        />
        <input
          type="password"
          className="Register__textBox"
          value={confPassword}
          onChange={(e) => setconfPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button
          className="Register__btn"
          onClick={() => createUserWithEmailAndPassword(auth, email, password)}
        >
          Register
        </button>
        <div>
          Have an account? <Link to="/Login">Login</Link>.
        </div>
      </div>
    </div>
  );
}
export default Register;
