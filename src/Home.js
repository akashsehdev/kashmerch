import React from "react";
import "./Home.css";
import Product from "./Product.js";
// import Logo from './kashmerchakash.png';
import dress from "./img/dress.png";
import lehenga from "./img/lehenga.jpg";
import lymio from "./img/lymio.jfif";
import phonecover from "./img/phonecover.jpg";
import shoes from "./img/shoes.jpg";
import straightner from "./img/straightner.jpg";
import tshirt from "./img/tshirt.png";
//Men
import high_neck_tshirt from "./img/high_neck_tshirt.jpg";
import stripe_tshirt from "./img/stripe_tshirt.jfif";
import beltQR from "./img/belt_QR.png";
import baby from "./img/baby.jfif";
import earring from "./img/earrings.jpg";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg"
          // https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg
          alt=""
        /> */}

        {/* <div className="headings">
          <h2>Women Dresses</h2>
          <hr></hr>
        </div> */}

        <div className="home__row">
          <Product
            id="43"
            title="High Neck Tshirt"
            price={29.99}
            image={high_neck_tshirt}
            rating={3}
          />

          <Product
            id="44"
            title="Stripe Tshirts"
            price={19.99}
            image={stripe_tshirt}
            rating={4}
          />

          <Product
            id="45"
            title="Leather Belt"
            price={20.99}
            image={beltQR}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="46"
            title="Dress"
            price={29.99}
            image={dress}
            rating={3}
          />

          <Product
            id="47"
            title="Embroidery Lehanga"
            price={19.99}
            image={lehenga}
            rating={4}
          />

          <Product
            id="48"
            title="Women Floral Long Dress"
            price={20.99}
            image={lymio}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="49"
            title="Phone Cover"
            price={15.99}
            image={phonecover}
            rating={4}
          />

          <Product
            id="50"
            title="Men Nike Air Max Shoes"
            price={16.99}
            image={shoes}
            rating={4}
          />

          <Product
            id="51"
            title="Straightner For Women"
            price={22.99}
            image={straightner}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="52"
            title="Men Printed Tshirt"
            price={18.99}
            image={tshirt}
            rating={4}
          />

          <Product id="53" title="baby" price={18.99} image={baby} rating={4} />

          <Product
            id="54"
            title="Women Earrings"
            price={18.99}
            image={earring}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
