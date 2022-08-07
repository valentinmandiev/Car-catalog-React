import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";
import style from "./Register.css"


const Register=()=>{

  const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('repeatPassword');

       
        if (password !== confirmPassword) {
            return;
        }
        if(password.length<=5 ){
          throw new Error('Youre password must be at least 5 characters ')
        }

        if(email.length<=5 ){
          throw new Error('Youre email must be at least 5 characters ')
       
        }

        authService.register(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            });
    }


    return(<>
      <section id="registerPage">
        <form className="registerForm" onSubmit={onSubmit}>
          <img src="./images/logo.png" alt="logo" />
          <h2>Register</h2>
          <div className="on-dark">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="ivo@abv.bg"
              defaultValue=""
            />
          </div>
          <div className="on-dark">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              defaultValue=""
            />
          </div>
          <div className="on-dark">
            <label htmlFor="repeatPassword">Repeat Password:</label>
            <input
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              placeholder="********"
              defaultValue=""
            />
          </div>
          <button className="btn" type="submit" defaultValue="Register" >
            Register
          </button>
          <p className="field">
            <span>
              If you have profile click <a href="#">here</a>
            </span>
          </p>
        </form>
      </section>
     
    </>
    

    );
};

export default Register