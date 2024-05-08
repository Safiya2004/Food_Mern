import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";
export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("");
  const [price, setPrice] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()
  function addtocart(){
    console.log(pizza)
    dispatch(addToCart(pizza,quantity,varient))
  }

  useEffect(() => {
    if (pizza.varients.length > 0) {
      const firstVariant = pizza.varients[0];
      setVarient(firstVariant); 
      const firstVariantPrice = pizza.Prices[0][firstVariant];
      setPrice(firstVariantPrice);
    }
  }, [pizza.varients, pizza.Prices]);

  // Handle variant change
  const handleVariantChange = (e) => {
    const selectedVariant = e.target.value;
    setVarient(selectedVariant);
    // Find the price for the selected variant and set it as the price
    const selectedVariantPrice = pizza.Prices[0][selectedVariant];
    setPrice(selectedVariantPrice);
  };
  return (
    <div
      style={{ margin: "70px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.Image} className="img-fluid" alt={pizza.name} />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p className="varients">Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={handleVariantChange}
          >
            {pizza.varients.map((variant, index) => {
              return (
                <option key={index} value={variant}>
                  {variant}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p className="varients">Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => {
              return (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-3 w-100">
          <h1 className="price">Price: {price * quantity} Rs/-</h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>ADD TO CART</button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.Image} className="img-fluid m-5" style={{height:'400px !important'}}/>
          <p className="varients">{pizza.Description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
