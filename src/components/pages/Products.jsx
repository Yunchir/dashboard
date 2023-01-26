import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { data } from "../../util/data";

export default function Products() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div>
        <div>
          <h2>Бүтээгдэхүүүн</h2>
        </div>
        <>
          <Button variant="primary" onClick={handleShow}>
            Бараа нэмэх
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div>
                <input type="text" />
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
        <div>
          <button>Бүгд</button>
          <input type="text" placeholder="Хайх" />
        </div>
      </div>
      <table>
        <thead>
          <tr className="list-name">
            <td>Барааны нэр</td>
            <td>Үнэ</td>
            <td>Үлдэгдэл</td>
            <td>Хямдрал</td>
          </tr>
        </thead>
        <tbody>
          {data.map((products) => (
            <tr className="product">
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
