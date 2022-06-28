import React from "react";
import "./Checkout.css";
// import Product from "./Product";
// import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import ViewItems from "./ViewItems";

function ViewProduct({ id, title, price }) {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkoutt">
      <div className="checkout__left">
        <p>{title}</p>
        {/* CheckoutProduct */}
        {basket.map((item) => (
          <ViewItems
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default ViewProduct;
