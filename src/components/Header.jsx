import React, { useState } from "react";
import logo from "../image/logo.png";
import logout from "../image/logout.png";
import "../styles/header.css";

export default function Header() {
  const [logIn, setLogin] = useState();
  return (
    <div className="header container">
      <div className="head">
        <img src={logo} alt="#" />
        <div className="search">
          <input className="input" type="search" name="search" />
          <button className="searchBtn">Search</button>
        </div>
        <div className="log">
          <img src={logout} alt="" />
          <section>
            {logIn ? (
              <div>
                <a href="/profile">{/* <img src={logout} alt="" /> */}</a>
              </div>
            ) : (
              <a href="login" id="signIn" className="signIn">
                Sign In
              </a>
            )}
            {/* )} */}
          </section>
        </div>
      </div>
    </div>
  );
}
