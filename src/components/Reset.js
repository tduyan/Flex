import React from 'react';

function Reset(){
    return(

        <div>
            <div>
            <input
          type="text"
          className="Register__textBox"

          
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="Register__textBox"
          
          placeholder="Password: 6 Characters or more"
        />
        <input
          type="password"
          className="Register__textBox"
       
          placeholder="Confirm Password"
        />
        <button
          className="Register__btn"
        >
          Register
        </button>
            </div>
        </div>
    );

}


export default Reset;