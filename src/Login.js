import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import logoBlack from "./images/logo-black.jpg";

import "./Login.css";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) history.push("/");
      })
      .catch((error) => console.error(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Success in user creation.
        console.log(auth);
        if (auth) history.push("/");
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logoBlack} alt="Amazon Logo" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signin-button"
          >
            Sign In
          </button>
        </form>

        <small>
          By signing-in, you agree to Amazon (Clone)'s Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </small>
        <button onClick={register} className="login__register-button">
          Create your Amazon (Clone) account
        </button>
      </div>
    </div>
  );
}

export default Login;
