import { React, useState } from "react";
import Detail from "../../components/pages/Detail";
import axios from "axios";
import "../../styles/products.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function Products(prop) {
  const [show, setShow] = useState(false);
  const [product, setproduct] = useState();
  const { data } = prop;
  function deleteProductHandler(id) {
    axios.delete(`http://localhost:2020/delete/${id}`);
  }
  return (
    <div>
      <div>
        <Detail setShow={setShow} show={show} data={product} />
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
            <td className="list-name">zurg</td>
            <td>Барааны нэр</td>
            <td>Үнэ</td>
            <td>Үлдэгдэл</td>
            <td>Хямдрал</td>
            <td>Kaтегори</td>
            <td>Устгах</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((product, index) => (
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
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.sale}</td>
                <td>{product.category}</td>
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
                          setproduct(product);
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
