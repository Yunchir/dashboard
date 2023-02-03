import React from "react";
import "../../styles/home.css";
import { data } from "../../util/data";

export default function Home() {
  return (
    <div>
      <table>
        <tbody>
          {data &&
            data.map((home) => (
              <div className="home">
                {" "}
                <img className="home-img" src={home.image} alt="" />
                {home.brand}
              </div>
            ))}
        </tbody>
      </table>
      <div>
        <button> </button> <a href="/"> 1 </a>
      </div>
    </div>
  );
}
