import React from 'react'
import './Footer.css';
import Logo from "./kashmerchakash.png";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
       <div>
       <Link to="/">
        <img
          className="footer__logo"
          src={Logo}
          // https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png
          alt="Kashmerch logo"
        />
      </Link>
       </div>
    </div>
  )
}

export default Footer