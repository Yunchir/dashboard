import SideMenu from "./components/SideMenu.jsx";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "./styles/dashboard.css";
import Home from "./components/pages/Home.jsx";
import Products from "./components/pages/Products.jsx";
import Users from "./components/pages/Users.jsx";
import Latest from "./components/pages/Latest";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Orders from "./components/pages/Orders";
import Moderator from "./components/pages/Moderators";
import Settings from "./components/pages/Settings";

export default function Dashboard() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:2020/products")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="app">
      <Header />
      <div className="main">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products data={data} />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Latest" element={<Latest />} />
          <Route path="/Moderator" element={<Moderator />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
