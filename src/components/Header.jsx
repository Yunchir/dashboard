import React from "react";
import logo from "../image/logo.png";
import logout from "../image/logout.png";
import "../styles/header.css";

export default function Header() {
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
          <button className="btn">Гарах</button>
        </div>
      </div>
    </div>
  );
}
