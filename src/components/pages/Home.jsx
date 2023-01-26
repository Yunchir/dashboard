import React from "react";
import "../../styles/home.css";
import { data } from "../../util/data";

export default function Home() {
  return (
    <div>
      <table>
        <thead>
          <tr className="list-name">
            <td>Зураг</td>
            <td>Барааны нэр</td>
            <td>Үнэ</td>
            <td>Үлдэгдэл</td>
            <td>Хямдрал</td>
          </tr>
        </thead>
        <tbody>
          {data.map((Latest) => (
            <tr className="product">
              <td>
                {" "}
                <img className="product-img" src={Latest.image} alt="" />{" "}
              </td>
              <td>{Latest.brand}</td>
              <td>{Latest.price}</td>
              <td>{Latest.sale}</td>
              <td>{Latest.caticory}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button> </button> <a href="/"> 1 </a>
      </div>
    </div>
  );
}
