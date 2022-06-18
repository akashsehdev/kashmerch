import React from 'react'
import "./Product.css";
import {useStateValue} from './StateProvider';

function Product({id, title, image, price, rating}) {

  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from the basket
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
    })
  }

  // console.log('this is the basket >>> ', basket);

  //Add to Basket
  const addToBasket = () =>{
    //dispatch the item into the data layer
    dispatch ({
      type: 'ADD_TO_BASKET',
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
    <div className="product">
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
          )) }
        </div>
      </div>
      <img src={image} alt=""/>

      <div className='product__button'>
         <button onClick={addToBasket}>Add to Basket</button>
         <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>      
      
    </div>
  )
}

export default Product;