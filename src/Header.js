import React from "react";
import { Link } from "react-router-dom";

import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketicon from "@material-ui/icons/ShoppingBasket";

import logo from "./images/logo.png";

function Header() {
  const [state, dispatch] = useStateValue();

  const handleAuth = () => {
    if (state.user) auth.signOut();
  };

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
        <Link to={!state.user && "/login"}>
          <div onClick={handleAuth} className="header__option">
            <span className="header__option-line-one">
              Hello {state.user ? state.user.email : "Guest"}
            </span>
            <span className="header__option-line-two">
              {state.user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
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
