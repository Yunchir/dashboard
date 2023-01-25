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
          {data.map((products) => (
            <tr className="product">
              <td>
                {" "}
                <img className="product-img" src={products.image} alt="" />{" "}
              </td>
              <td>{products.brand}</td>
              <td>{products.price}</td>
              <td>{products.sale}</td>
              <td>{products.caticory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
