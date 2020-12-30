import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketicon from "@material-ui/icons/ShoppingBasket";

import logo from "./images/logo.png";

function Header() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="header__logo" alt="Amazon Logo" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__search-input" />
        <SearchIcon className="header__search-icon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <Link to="/login">
            <span className="header__option-line-one">Hello Guest</span>
            <span className="header__option-line-two">Sign In</span>
          </Link>
        </div>
        <div className="header__option">
          <span className="header__option-line-one">Returns</span>
          <span className="header__option-line-two">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-line-one">Your</span>
          <span className="header__option-line-two">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__option-basket">
            <ShoppingBasketicon />
            <span className="header__option-line-two header__basket-count">
              {state.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
