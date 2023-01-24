import React from "react";
import "../../styles/home.css";
import { data } from "../../util/data";

export default function Home() {
  console.log(data);
  return (
    <div className="">
      <table>
        <thead>
          <tr>
            <td>Зураг</td>
            <td>Барааны нэр</td>
            <td>Үнэ</td>
            <td>Үлдэгдэл</td>
            <td>Хямдрал</td>
          </tr>
        </thead>
        <tbody>
          {data.map((products) => (
            <tr>
              <td>
                {" "}
                <img src={products.image} alt="" />{" "}
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
