import { React } from "react";
import Detail from "../../components/pages/Detail";

export default function Products(prop) {
  const { data } = prop;
  return (
    <div>
      <div>
        <Detail />
        <div>
          <h2>Бүтээгдэхүүүн</h2>
        </div>
        <div>
          <button>Бүгд</button>
          <input type="text" placeholder="Хайх" />
        </div>
      </div>
      <table>
        <thead>
          <tr className="list-name">
            <td>zurg</td>
            <td>Барааны нэр</td>
            <td>Үнэ</td>
            <td>Үлдэгдэл</td>
            <td>Хямдрал</td>
            <td>Kaтегори</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((product, index) => (
              <tr className="product" key={index}>
                {" "}
                <td>
                  <img className="home-img" src={product.image} alt="" />
                </td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <td>{product.num}</td>
                <td>{product.sale}</td>
                <td>{product.caticory}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
