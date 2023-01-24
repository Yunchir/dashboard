import SideMenu from "./components/SideMenu.jsx";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "./styles/dashboard.css";
import Home from "./components/pages/Home.jsx";
import Products from "./components/pages/Products.jsx";
import Users from "./components/pages/Users.jsx";
import "./App.css";

export default function Dashboard() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}
