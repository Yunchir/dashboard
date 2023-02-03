import React from "react";
import "../../styles/users.css";
import { data } from "../../util/data";

export default function Moderator() {
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
          <tr className="Moderator-list">
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
            data.map((Moderator) => (
              <tr className="Moderator">
                <td className="td">{Moderator.order}</td>
                <td>{Moderator.sureName}</td>
                <td>{Moderator.firstName}</td>
                <td>{Moderator.email}</td>
                <td>{Moderator.number}</td>
                <td>{Moderator.num}</td>
                <td>{Moderator.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
