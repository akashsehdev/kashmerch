import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e =>{
    e.preventDefault();

    //some fancy firebase login
    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          navigate('/')
        })
        .catch(error => alert(error.message))

  }

  const register =e =>{
    e.preventDefault();

    //some fancy register
    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
          //Succesfully created a new user with email and password
          console.log(auth);
          if (auth) {
            navigate('/')
          }
        })
        .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
      <img
      className='login__logo' 
      src='https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png' alt=''/>
      </Link>

      <div className='login__container'>
          <h1>Sign-in</h1>
          
          <form>
            <h5>E-mail</h5>
            <input type='text' value={email} 
            onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password}
            onChange={e => setPassword(e.target.value)}/>

            <button type='submit' onClick={signIn}
            className='login__signInButton'>Sign In</button>
          </form>

          <p>
            By signing-in you agree to Kashmerch's
            conditions of Use & Sale. Please see 
            our privacy notice, our Cookies notice
            and out Interest-Based Ads
            Notice.
          </p>

          <button onClick={register}
          className='login__registerButton'>Create your Account</button>
      </div>

    </div>
  )
}

export default Login