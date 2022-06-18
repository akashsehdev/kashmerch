import React from 'react'
import "./Home.css";
import Product from './Product.js';
// import Logo from './kashmerchakash.png';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img 
        className="home__image"
        src="https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg"
        // https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg 
        alt=""/>

        <div className="home__row">
          <Product 
          id="123456"
          title="The lean startup"
          price={29.99}
          image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          rating={3}
          />

          <Product 
          id="123457"
          title="The lean startup with something excited"
          price={19.99}
          image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          rating={4}
          />

          <Product 
          id="123457"
          title="The lean startup with something excited"
          price={19.99}
          image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          rating={4}
          />

        </div>

        <div className="home__row">
          <Product 
          id="123458"
          title="The lean startup with something excited"
          price={15.99}
          image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          rating={4}
          />

          <Product 
          id="123458"
          title="The lean startup with something excited"
          price={16.99}
          image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          rating={4}
          />

          <Product 
          id="123458"
          title="The lean startup with something excited"
          price={22.99}
          image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          rating={4}
          />
        </div>

        <div className="home__row">
          <Product 
          id="123458"
          title="The lean startup with something excited"
          price={18.99}
          image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          rating={4}
          />

          <Product 
          id="123458"
          title="The lean startup with something excited"
          price={18.99}
          image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          rating={4}
          />

        </div>

      </div>
    </div> 
  )
}

export default Home;