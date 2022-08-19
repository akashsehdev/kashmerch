import React from "react";
import "./Home.css";
import Product from "./Product.js";
// import Logo from './kashmerchakash.png';
import dress from "./img/dress.png";
import lehenga from "./img/lehenga.jpg";
import lymio from "./img/lymio.jfif";
import light_blue from "./img/light_blue.jfif";
import floral from "./img/floral_dress.jfif";
import blue_dress from "./img/blue_dress.jfif";
import yellow_dress from "./img/yellow_dress.jfif";
import hoodie from "./img/hoodie.jpg";
import saare from "./img/saare.jpg";
import earrings from './img/earrings.jpg'
import straightner from './img/straightner.jpg'
import earring1 from './img/earrings1.jpg'
import { light } from "@mui/material/styles/createPalette";

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
          <h2>WOMEN</h2>
        </div>

        <div className="home__row">
          <Product
            id="10"
            title="Dress"
            price={29.99}
            image={dress}
            rating={3}
          />

          <Product
            id="11"
            title="Embroidery Lehanga"
            price={19.99}
            image={lehenga}
            rating={4}
          />

          <Product
            id="12"
            title="Women Floral Long Dress"
            price={20.99}
            image={lymio}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="13"
            title="Ethnic Earring For Women"
            price={15.99}
            image={earring1}
            rating={4}
          />

          <Product
            id="14"
            title="White Printed Floral Dress"
            price={16.99}
            image={floral}
            rating={4}
          />

          <Product
            id="15"
            title="Light Blue Frock For Women"
            price={22.99}
            image={blue_dress}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="16"
            title="Ethnic Earring"
            price={18.99}
            image={earrings}
            rating={4}
          />

          <Product
            id="17"
            title="Hoodie For Girls"
            price={18.99}
            image={hoodie}
            rating={4}
          />

          <Product
            id="18"
            title="Black Spotted Saaree For Womens"
            price={18.99}
            image={saare}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="19"
            title="Yellow Printed Frock"
            price={18.99}
            image={yellow_dress}
            rating={4}
          />

          <Product
            id="20"
            title="Straightner For Women"
            price={18.99}
            image={straightner}
            rating={4}
          />

          <Product
            id="21"
            title="Light Blue Net Frock"
            price={18.99}
            image={light_blue}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
