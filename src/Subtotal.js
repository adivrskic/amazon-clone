import React from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

import "./Subtotal.css";

function Subtotal() {
  const history = useHistory();
  const [state, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <React.Fragment>
              <p>
                Subtotal ({state.basket.length} items):
                <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </React.Fragment>
          );
        }}
        decimalScale={2}
        value={getBasketTotal(state.basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
