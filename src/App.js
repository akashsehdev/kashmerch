import React,{useEffect} from 'react';
import './App.css';
import Header from './Header.js';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Home from './Home';
import Login from './Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import Footer from './Footer';
//for stripe setup
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
//import Subtotal from './Subtotal';

//Paste key from Stripe
const promise = loadStripe('pk_test_51LBmZ3SBwsYbscQYTjc5vEoNFuhXVlpD6AobbPBsnsfK068RFVuVXjsG34VWd0GUu1t5zA5vC9mK54ZuUrC5ibmq00osYKeSFS');

function App() {

  const [{}, dispatch] = useStateValue();

  
useEffect(() => {
  //will only run once when the app component load
  //As soon as the apps load it attach the listener and refires the code for login 
  //logout etc. It is an observer
  auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>>', authUser);

    if(authUser){
      //the user just logged in / the user was logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })

    }
    else{
      //the user is logged out
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })
}, [])

  return (
    //BEM
    <Router>
      <div className="app">
          
          {/* When you have different cases */}
          <Routes>
            {/* Default root */}
            <Route exact path="/" element={[<Header/>, <Home/>, <Footer/>]} />
            {/* Default root */}
            <Route exact path="/login" element={[<Header />, <Login />]} />
            {/* Checkout Page */}
            <Route path="/checkout" element={[<Header />, <Checkout />]} />
            {/* Payment Page */}
            <Route path="/payment" element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]} /> 
          </Routes>
      </div>
    </Router>
    

    // <Router>
    //   <div className="app">
    //     <Header />
    //     {/* When you have different cases */}
    //     <Routes>
    //       {/* Checkout Page */}
    //       <Route path="/checkout">
    //         <Checkout />
    //       </Route>

    //       {/* Default root */}
    //       <Route path="/"> 
    //         <Home />
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
    

    //If module not found error occurs do this
    //npm install --save-dev @types/react-router-dom
    //npm i -g firebase-tools
    //firebase login
    //firebase init
    //firebase deploy
    //Stripe Dependencies - npm i @stripe/stripe-js, npm i @stripe/react-stripe-js
//     What do you want to use as your public directory? build
// ? Configure as a single-page app (rewrite all urls to /index.html)? Yes

  );
}

export default App;

