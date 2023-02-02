import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ProductsModal from "./ProductsModal";
import axios from "axios";
import "../../styles/detail.css";

export default function Detail(prop) {
  const { data, setShow, show } = prop;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [hi, setHi] = useState([]);

  function send(e) {
    e.preventDefault();

    axios.post("http://localhost:2020/products", {
      image: e.target.proImage.value,
      brand: e.target.proName.value,
      price: e.target.proPrice.value,
      sale: e.target.proSale.value,
      caticory: e.target.proStatus.value,
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
                    <p>Үзүүлэлт</p>
                    <input
                      type="text"
                      name="proStatus"
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
                <div>
                  <span>Үзүүлэлтүүд</span>
                </div>
                <section>
                  <p>Багтаамж</p>
                  <input type="text" name="" id="" />
                </section>
                <section>
                  <p>Цахилгаан зарцуулалт</p>
                  <input type="text" name="" id="" />
                </section>
                <section>
                  <p>Хүчдэл</p>
                  <input type="text" name="" id="" />
                </section>
                <section>
                  <p>Хэмжээ</p>
                  <input type="text" name="" id="" />
                </section>
                <section>
                  <p>Баталгаам хугцаа</p>
                  <input type="text" name="" id="" />
                </section>
                <section>
                  <p>Тайлбар</p>
                  <input type="text" name="" id="" />
                </section>
                <section>
                  <p>Нэмэлт утасны дугаар</p>
                  <input type="text" />
                </section>
              </section>
              <button className="off-order-footer-footer-button" type="submit">
                ХАДГАЛАХ
              </button>
            </form>
            <form className="off-order-footer">
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
            </form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
