import React from "react";
import { Link } from "react-router-dom";
import logoBlack from "./images/logo-black.jpg";

import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logoBlack} alt="Amazon Logo" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input text="email" />

          <h5>Password</h5>
          <input text="password" />

          <button className="login__signin-button">Sign In</button>
        </form>

        <small>
          By signing-in, you agree to Amazon (Clone)'s Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </small>
        <button className="login__register-button">
          Create your Amazon (Clone) account
        </button>
      </div>
    </div>
  );
}

export default Login;
