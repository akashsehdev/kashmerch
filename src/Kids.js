import React from "react";
import "./Home.css";
import Product from "./Product.js";
// import Logo from './kashmerchakash.png';
import baby from "./img/baby.jfif";
import tracksuit from "./img/tracksuit.jfif";
import partry from "./img/partry.jfif";
import light_shoes from "./img/light_shoes.jfif";
import frock from "./img/frock.jfif";
import ethenickid from "./img/ethenickid.jfif";
import ethenic from "./img/ethenic.jfif";
import boy from "./img/boy.jfif";
import casual from "./img/casual.jfif";

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
          <h2>KIDS</h2>
        </div>

        <div className="home__row">
          <Product
            id="22"
            title="Baby Dress"
            price={29.99}
            image={baby}
            rating={3}
          />

          <Product
            id="23"
            title="Track Suit"
            price={19.99}
            image={tracksuit}
            rating={4}
          />

          <Product
            id="24"
            title="Baby Party Dress"
            price={20.99}
            image={partry}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="25"
            title="Baby Light Shoes"
            price={15.99}
            image={light_shoes}
            rating={4}
          />

          <Product
            id="26"
            title="Ethenic Dress For Girls"
            price={16.99}
            image={ethenic}
            rating={4}
          />

          <Product
            id="27"
            title="Ethenic Dress For Boy"
            price={22.99}
            image={ethenickid}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="28"
            title="Frock"
            price={18.99}
            image={frock}
            rating={4}
          />

          <Product
            id="29"
            title="Casual Wear For Boy"
            price={18.99}
            image={boy}
            rating={4}
          />

          <Product
            id="30"
            title="Casual Wear For Girls"
            price={18.99}
            image={casual}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
