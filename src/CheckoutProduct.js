import React from "react";

import { useStateValue } from "./StateProvider";

import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [state, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="checkout-product">
      <img className="checkout-product__image" src={image} alt={title} />
      <div className="checkout-product__info">
        <p className="checkout-product__title">{title}</p>
        <p className="checkout-product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
