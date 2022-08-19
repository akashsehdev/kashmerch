import React from "react";
import "./Home.css";
import Product from "./Product.js";
// import Logo from './kashmerchakash.png';
import high_neck_tshirt from "./img/high_neck_tshirt.jpg";
import stripe_tshirt from "./img/stripe_tshirt.jfif";
import belt from "./img/belt.jfif";
import M_shorts from "./img/M_shorts.jpg";
import shoes from "./img/shoes.jpg";
import cotton_kurta from "./img/cotton_kurta.jpeg";
import denim from "./img/denim.jfif";
import kurta from "./img/kurta.jfif";
import jeans from "./img/jeans.jfif";

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

        <div className="headings">
          <h2>MEN</h2>
        </div>

        <div className="home__row">
          <Product
            id="1"
            title="High Neck Tshirt"
            price={29.99}
            image={high_neck_tshirt}
            rating={3}
          />

          <Product
            id="2"
            title="Stripe Tshirts"
            price={19.99}
            image={stripe_tshirt}
            rating={4}
          />

          <Product
            id="3"
            title="Leather Belt"
            price={20.99}
            image={belt}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4"
            title="Men Shorts"
            price={15.99}
            image={M_shorts}
            rating={4}
          />

          <Product
            id="5"
            title="Men Nike Air Max Shoes"
            price={16.99}
            image={shoes}
            rating={4}
          />

          <Product
            id="6"
            title="Cotton Kurta"
            price={22.99}
            image={cotton_kurta}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="7"
            title="Denim Shirt"
            price={18.99}
            image={denim}
            rating={4}
          />

          <Product
            id="8"
            title="Kurta"
            price={18.99}
            image={kurta}
            rating={4}
          />

          <Product
            id="9"
            title="Jeans"
            price={18.99}
            image={jeans}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
