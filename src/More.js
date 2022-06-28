import React from "react";
import "./Home.css";
import Product from "./Product.js";
// import Logo from './kashmerchakash.png';

import high_neck_tshirt from "./img/high_neck_tshirt.jpg";
import stripe_tshirt from "./img/stripe_tshirt.jfif";
import belt from "./img/belt.jfif";
import dress from "./img/dress.png";
import lehenga from "./img/lehenga.jpg";
import M_shorts from "./img/floral_dress.jfif";
import phonecover from "./img/phonecover.jpg";
import shoes from "./img/shoes.jpg";
import straightner from "./img/straightner.jpg";
// import dress from "./dress.png";
// import dress from "./dress.png";

import light_shoes from "./img/light_shoes.jfif";
import ethenic from "./img/ethenic.jfif";
import ethenickid from "./img/ethenickid.jfif";

function More() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg"
          // https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg
          alt=""
        /> */}

        <div className="headings">
          <h2>MORE ITEMS</h2>
        </div>

        <div className="home__row">
          <Product
            id="31"
            title="Dress"
            price={29.99}
            image={dress}
            rating={3}
          />

          <Product
            id="32"
            title="The lean startup with something excited"
            price={19.99}
            image={lehenga}
            rating={4}
          />

          <Product
            id="33"
            title="Women Floral Long Dress"
            price={20.99}
            image={M_shorts}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="34"
            title="Phone Cover"
            price={15.99}
            image={phonecover}
            rating={4}
          />

          <Product
            id="35"
            title="Men Nike Air Max Shoes"
            price={16.99}
            image={shoes}
            rating={4}
          />

          <Product
            id="36"
            title="Straightner For Women"
            price={22.99}
            image={straightner}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="37"
            title="Baby Light Shoes"
            price={15.99}
            image={light_shoes}
            rating={4}
          />

          <Product
            id="38"
            title="Ethenic Dress For Girls"
            price={16.99}
            image={ethenic}
            rating={4}
          />

          <Product
            id="39"
            title="Ethenic Dress For Boy"
            price={22.99}
            image={ethenickid}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="40"
            title="High Neck Tshirt"
            price={29.99}
            image={high_neck_tshirt}
            rating={3}
          />

          <Product
            id="41"
            title="Stripe Tshirts"
            price={19.99}
            image={stripe_tshirt}
            rating={4}
          />

          <Product
            id="42"
            title="Leather Belt"
            price={20.99}
            image={belt}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default More;
