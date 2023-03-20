import React from "react";
import "../../styles/home.css";
import { data } from "../../util/data";

export default function Home() {
  return (
    <div>
      <table>
        <tbody>
          {data.map((Controlpanel) => (
            <tr className="Controlpanel">
              <td>
                {" "}
                <img
                  className="product-img"
                  src={Controlpanel.image}
                  alt=""
                />{" "}
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
