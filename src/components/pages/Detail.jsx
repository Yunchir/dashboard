// import ProductsModal from "./ProductsModal";
// import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from "axios";
import "../../styles/detail.css";

export default function Detail(prop) {
  const { data, setShow, show } = prop;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [hi, setHi] = useState([]);

  function send(e) {
    e.preventDefault();

    axios.post("http://localhost:2020/products", {
      // image: e.target.proImage.value,
      name: e.target.proName.value,
      price: e.target.proPrice.value,
      stock: e.target.proStock.value,
      sale: e.target.proSale.value,
      // category: e.target.proCategory.value,
    });
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        +Бараа нэмэх
      </Button>

      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div>
            <div className="off-order-top">
              <section className="off-order-top-head">
                <p>Барааны зураг</p>
                <input
                  type="text"
                  name="proImage"
                  defaultValue={data ? data.image : ""}
                />
              </section>
            </div>
            <form className="off-order-main" onSubmit={send}>
              <section className="off-order-main-top">
                <section className="off-order-main-top-start">
                  <section>
                    <p>Барааны нэр</p>
                    <input
                      type="text"
                      name="proName"
                      defaultValue={data ? data.name : ""}
                    />
                  </section>
                  <section>
                    <p>Барааны үнэ</p>
                    <input
                      type="text"
                      name="proPrice"
                      defaultValue={data ? data.price : ""}
                    />
                  </section>

                  <section>
                    <p>Үлдэгдэл</p>
                    <input
                      type="text"
                      name="proStock"
                      defaultValue={data ? data.stock : ""}
                    />
                  </section>
                </section>
                <section>
                  <p>Хямдрал(%-иар)</p>
                  <input
                    type="text"
                    name="proSale"
                    id=""
                    defaultValue={data ? data.sale : ""}
                  />
                </section>
                {/* <section>
                  <p>category</p>
                  <input
                    type="text"
                    name="proCategory"
                    defaultValue={data ? data.category : ""}
                  />
                </section> */}
              </section>
              <select id="category" name="category">
                <option value="appliances">appliances</option>
                <option value="computers & tablets">computers & tablets</option>
                <option value="gaming console">gaming console</option>
                <option value="telescope">telescope</option>
              </select>
              <button className="off-order-footer-footer-button" type="submit">
                ХАДГАЛАХ
              </button>

              {/* defaultValue={data ? data.sale : ""} */}
            </form>
            {/* <form className="off-order-footer">
              <div>
                <ProductsModal setHi={setHi} hi={hi} />
                {hi &&
                  hi.map((i) => {
                    console.log(i);
                    return (
                      <div>
                        <label htmlFor="">{i[0]}</label>
                        <input type="text" defaultValue={i[1]} />
                      </div>
                    );
                  })}
              </div>

              <section className="off-order-footer-main">
                <section>
                  <p>Категори сонгох</p>
                  <input type="text" />
                </section>

                <section>
                  <p>Бренд сонгох</p>
                  <input type="text" />
                </section>
              </section>

              <section className="off-order-footer-footer">
                <button
                  className="off-order-footer-footer-button"
                  type="submit"
                >
                  ХАДГАЛАХ
                </button>
              </section>
            </form> */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
