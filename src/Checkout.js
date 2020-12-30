import React from "react";
import { useStateValue } from "./StateProvider";

import "./Checkout.css";

import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

import ad from "./images/ad.jpg";

function Checkout() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={ad} alt="Gifts under $100" />
        <div className="checkout__title">
          <h2>
            {state.user ? state.user.email + "'s" : "Your"} shopping basket
          </h2>
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
