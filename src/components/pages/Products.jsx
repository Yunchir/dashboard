import { React, useContext, useState } from "react";
import Detail from "../../components/pages/Detail";
import axios from "axios";
import "../../styles/products.css";
import Dropdown from "react-bootstrap/Dropdown";
import { DataContext } from "../../App.js";

export default function Products() {
  const [show, setShow] = useState(false);
  // const [product, setproduct] = useState();
  // const { data } = prop;

  const { data, setData } = useContext(DataContext);

  function deleteProductHandler(id) {
    axios.delete(`http://localhost:2020/delete/${id}`);
  }
  return (
    <div>
      <div>
        <div>
          <h2>Бүтээгдэхүүүн</h2>
        </div>
        <Detail setShow={setShow} show={show} data={data} />
        <div className="proSearch">
          <button className="proSearch-btn">Бүгд</button>
          <input type="text" placeholder="Хайх" className="proSearch-input" />
        </div>
      </div>
      <table striped bordered hover>
        <thead>
          <tr className="list-name">
            <th className="list-name">Зураг</th>
            <th>Барааны нэр</th>
            <th>Үнэ</th>
            <th>Үлдэгдэл</th>
            <th>Хямдрал{"%"}</th>

            <th className="list-category">Kaтегори</th>

            <th>Устгах</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr className="product" key={index}>
              {" "}
              <td>
                <img
                  className="home-img"
                  src={product.image}
                  alt="product-img"
                />
              </td>
              <td className="proBrand">{product.name}</td>
              <td>
                {"$"}
                {product.price}
              </td>
              <td>{product.stock}</td>
              <td>{product.sale}</td>
              <div className="list-cate">
                <td className="procategory">{product.category}</td>
              </div>
              <td>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#"
                      onClick={() => {
                        setShow(true);
                        setData(data);
                      }}
                    >
                      Өөрчлөх
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      onClick={() => deleteProductHandler(product.id)}
                    >
                      Устгах
                    </Dropdown.Item>
                    <Dropdown.Item href="#">Нуух</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
