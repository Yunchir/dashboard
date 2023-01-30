import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { axios } from "axios";

export default function Example(prop) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { hi } = prop;

  const { setHi } = prop;

  function send(e) {
    e.preventDefault();
    setHi([...hi, [e.target.input1.value, e.target.input2.value]]);
    // axios.post("http://localhost:2020/products");
  }
  console.log(setHi);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        uzuulelt nemeh
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" onSubmit={send}>
            <input name="input1" type="text" />
            <input name="input2" type="text" />
            <button type="submit">Save</button>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
