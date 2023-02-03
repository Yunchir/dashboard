import React from "react";
import "../../styles/users.css";
import { data } from "../../util/data";

export default function Users() {
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
            <td>User Id</td>
            <td>Овог</td>
            <td>Нэр</td>
            <td>Имайл</td>
            <td>Утас</td>
            <td>Захиалга</td>
            <td>Огноо</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((users) => (
              <tr className="users">
                <td className="td">{users.order}</td>
                <td>{users.sureName}</td>
                <td>{users.firstName}</td>
                <td>{users.email}</td>
                <td>{users.number}</td>
                <td>{users.num}</td>
                <td>{users.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
