import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
// import ViewProduct from "./ViewProduct";
// import { ButtonBase } from "@mui/material";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  // const navigate = useNavigate();
  const removeFromBasket = () => {
    //remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  // console.log('this is the basket >>> ', basket);

  //Add to Basket
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

  //View Product
  const viewProduct = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "VIEW_PRODUCT",
      item: {
        id:id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <div className="product__button">
        <button onClick={addToBasket}>ADD TO BASKET</button>
        <button onClick={removeFromBasket}>REMOVE FROM BASKET</button>
      </div>
    </div>
  );
}

export default Product;

// {/* <Link to="/viewproduct">
//         <button onClick={viewProduct}>VIEW PRODUCT</button>
//       </Link> */}

//       {/* <button
//         onClick={function (e) {
//           return navigate("/viewproduct", { replace: true });
//         }}
//       >
//         VIEW PRODUCT
//       </button> */}
