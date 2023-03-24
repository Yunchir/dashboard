// import ProductsModal from "./ProductsModal";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from "axios";
import "../../styles/detail.css";
import { DataContext } from "../../App.js";

export default function Detail(prop) {
  const [file, setFile] = useState();
  const [details, setDetails] = useState({
    name: "",
    price: null,
    stock: null,
    sale: null,
    description: "",
    category: "",
  });

  const { setShow, show } = prop;

  const { data, setData } = useContext(DataContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [hi, setHi] = useState([]);

  function detailsHandler(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }
  function fileHandler(e) {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("details", JSON.stringify(details));
    formData.append("file", file);
    axios
      .post("http://localhost:6060/products/add", formData)
      .then((res) => console.log(res));
    // axios
    //   .post({
    //     method: "POST",
    //     url: "http://localhost:6060/products/add",
    //     data: formData,
    //     headers: {
    //       Content_type: "multipart/form-data",
    //     },
    //   })
    //   .then((res) => console.log(res));
    // console.log("dataa name:", data[0].name);
  }
  // function uploadHandler(e) {
  //   // const formData = new FormData();
  //   // formData.append("image", e.target.files[0]);
  //   console.log(e.target.files[0]);
  // }

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
                  onChange={fileHandler}
                  className="fileName"
                  type="file"
                  // value={upload}
                  name="proImage"
                  defaultValue={data ? data.image : ""}
                />
              </section>
            </div>
            <form className="off-order-main" encType="multipart/form-data">
              <section className="off-order-main-top">
                <section className="off-order-main-top-start">
                  <section>
                    <p>Барааны нэр</p>
                    <input
                      onChange={detailsHandler}
                      type="text"
                      name="name"
                      placeholder="Name"
                      defaultValue={data ? data.name : ""}
                    />
                  </section>
                  <section>
                    <p>Барааны үнэ</p>
                    <input
                      onChange={detailsHandler}
                      type="text"
                      name="price"
                      placeholder="Price"
                      defaultValue={data ? data.price : ""}
                    />
                  </section>

                  <section>
                    <p>Үлдэгдэл</p>
                    <input
                      onChange={detailsHandler}
                      type="text"
                      name="stock"
                      placeholder="Stock"
                      defaultValue={data ? data.stock : ""}
                    />
                  </section>
                </section>
                <section>
                  <p>Хямдрал(%-иар)</p>
                  <input
                    onChange={detailsHandler}
                    type="text"
                    name="sale"
                    id=""
                    placeholder="Sale"
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
              <button
                className="off-order-footer-footer-button"
                type="submit"
                onClick={handleSubmit}
              >
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

// app.put("/products", (request, response) => {
//   fs.readFile("./data/product.json", (err, products) => {
//     if (err) {
//       res.status(500).send({ message: "not working" });
//     } else {
//       let data = JSON.parse(products);
//       let product = data.find((product) => product.id == request.params.id);
//       data[data.indexOf(product)] = request.body;

//       fs.writeFile("./data/product.json", JSON.stringify(data), (err) => {
//         if (err) {
//           response.status(500).send({ message: "err" });
//         } else {
//           request.status(200).send({ massage: "working" });
//         }
//       });
//       res.send(data);
//     }
//   });
// });
