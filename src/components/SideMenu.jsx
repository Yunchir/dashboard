import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SideMenu.css";

export default function SideMenu() {
  const navigate = useNavigate();

  return (
    <div className="sideMenu ">
      <div className="buttons">
        <button
          className="sideMenu-button"
          onClick={() => {
            navigate("");
          }}
        >
          Хянах самбар
        </button>
        <button
          className="sideMenu-button"
          onClick={() => {
            navigate("/Products");
          }}
        >
          Бүтээгдэхүүнүүд
        </button>
        <button
          className="sideMenu-button"
          onClick={() => {
            navigate("/Users");
          }}
        >
          Хэрэглэгчид
        </button>
        <button
          className="sideMenu-button"
          onClick={() => {
            navigate("/Orders");
          }}
        >
          Захиалгууд
        </button>
        <button
          className="sideMenu-button"
          onClick={() => {
            navigate("/Moderator");
          }}
        >
          Модератор
        </button>
        <button
          className="sideMenu-button"
          onClick={() => {
            navigate("/Settings");
          }}
        >
          Тохиргоо
        </button>
      </div>
    </div>
  );
}
