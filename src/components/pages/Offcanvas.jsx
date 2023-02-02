// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import "../../styles/Offcanvas.css";

// export default function Offcanvass() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         +Бараа нэмэх
//       </Button>

//       <Offcanvas show={show} placement="end" onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title></Offcanvas.Title>
//         </Offcanvas.Header>

//         <Offcanvas.Body>
//           <div>
//             <div className="off-order-top">
//               <section className="off-order-top-head">
//                 {" "}
//                 <p>Захиалсан бараа(1)</p>
//               </section>

//               <section className="off-order-top-body">
//                 <section className="off-order-top-body-start">
//                   <img className="off-order-top-img" src="" alt="asd" />
//                   <p>Samsung VT3445 хөргөгч</p>
//                 </section>
//                 <section>
//                   <p>$1234</p>
//                 </section>
//               </section>
//             </div>
//             <div className="off-order-main">
//               <section className="off-order-main-top">
//                 <section className="off-order-main-top-start">
//                   <section>
//                     <p>Захиалгын огноо</p>
//                     <input type="text" />
//                   </section>
//                   <section>
//                     <p>Захиалагчийн нэр</p>
//                     <input type="text" />
//                   </section>

//                   <section>
//                     <p>Утасны дугаар</p>
//                     <input type="text" />
//                   </section>
//                 </section>
//                 <section className="off-order-main-top-end">
//                   <section>
//                     <p>Захиалгын статус:</p>
//                     <input type="text" name="" id="" />
//                   </section>
//                   <section>
//                     <p>И-мэйл хаяг</p>
//                     <input type="text" name="" id="" />
//                   </section>
//                   <section>
//                     <p>Нэмэлт утасны дугаар</p>
//                     <input type="text" />
//                   </section>
//                 </section>
//               </section>

//               <section className="off-order-main-footer">
//                 <p>Хүргүүлэх хаяг:</p>
//                 <p>...</p>
//               </section>
//             </div>
//             <div className="off-order-footer">
//               <section className="off-order-footer-top">
//                 <p>Төлбөрийн статус:</p>
//                 <input type="text" />
//               </section>

//               <section className="off-order-footer-main">
//                 <section>
//                   <p>Төлбөрийн сонголт</p>
//                   <input type="text" />
//                 </section>

//                 <section>
//                   <p>Баримт</p>
//                   <input type="text" />
//                 </section>
//               </section>

//               <section className="off-order-footer-footer">
//                 <button className="off-order-footer-footer-button">
//                   ХАДГАЛАХ
//                 </button>
//               </section>
//             </div>
//           </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }
