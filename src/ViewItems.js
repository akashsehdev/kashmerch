import React from "react";
import { Link } from "react-router-dom";
// import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import "./ViewItem.css";

function ViewItems({ id, image, title, price, rating, hideButton }) {
  const viewProduct = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "VIEW_PRODUCT",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <div className="viewproduct__button">
            <button onClick={addToBasket}>ADD TO BASKET</button>
            <button onClick={removeFromBasket}>REMOVE FROM BASKET</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewItems;
