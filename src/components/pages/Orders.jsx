import React from "react";
import "../../styles/orders.css";
import { data } from "../../util/data";
import Table from "react-bootstrap/Table";

export default function Orders() {
  return (
    <div>
      <div>
        <div>
          <h2>Захиалгууд</h2>
        </div>
        <div>
          <button>Бүгд</button>
        </div>
      </div>
      <table>
        <thead>
          <tr className="orders-list">
            <td>Захиалга</td>
            <td>Огноо</td>
            <td>Утас</td>
            <td>Имайл</td>
            <td>Хаяг</td>
            <td>Тоо</td>
            <td>Нийт дүн</td>
            <td>Төлбөр</td>
            <td>Статус</td>
          </tr>
        </thead>
        <tbody>
          {data.map((orders) => (
            <tr className="orders">
              <td className="td">{orders.order}</td>
              <td>{orders.date}</td>
              <td>{orders.number}</td>
              <td>{orders.email}</td>
              <td>{orders.num}</td>
              <td>{orders.price}</td>
              <td>{orders.pay}</td>
              <td>{orders.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Table striped bordered hover>
        <thead>
          <tr className="orders-list">
            <td>Захиалга</td>
            <td>Огноо</td>
            <td>Утас</td>
            <td>Имайл</td>
            <td>Хаяг</td>
            <td>Тоо</td>
            <td>Нийт дүн</td>
            <td>Төлбөр</td>
            <td>Статус</td>
          </tr>
        </thead>
        <tbody>
          {data.map((orders) => (
            <tr className="orders">
              <td className="td">{orders.order}</td>
              <td>{orders.date}</td>
              <td>{orders.number}</td>
              <td>{orders.email}</td>
              <td>{orders.num}</td>
              <td>{orders.price}</td>
              <td>{orders.pay}</td>
              <td>{orders.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
