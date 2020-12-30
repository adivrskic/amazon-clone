import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";

import Subtotal from "./Subtotal";

import ad from "./images/ad.jpg";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={ad} alt="Gifts under $100" />
        <div className="checkout__title">
          <h2>Your shopping basket</h2>
        </div>
        <div className="checkout__items">
          {state.basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
