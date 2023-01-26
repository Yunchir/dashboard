import SideMenu from "./components/SideMenu.jsx";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "./styles/dashboard.css";
import Home from "./components/pages/Home.jsx";
import Products from "./components/pages/Products.jsx";
import Users from "./components/pages/Users.jsx";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Orders from "./components/pages/Orders";

export default function Dashboard() {
  useEffect(() => {
    axios
      .get("http://localhost:2020/products")
      .then((res) => console.log(res.data));
  }, []);
  return (
    <div className="app">
      <Header />
      <div className="main">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}
