import React from "react";
import { Link } from "react-router-dom";

import { useStateValue } from "./StateProvider";

import "./Payment.css";

import CheckoutProduct from "./CheckoutProduct";

function Payment() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{state.basket?.length} item(s)</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{state.user?.email}</p>
            <p>123 Address Rd</p>
            <p>Atlanta, GA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">Stripe Stuff</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
