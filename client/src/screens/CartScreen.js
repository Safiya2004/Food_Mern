import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { deleteFromCart } from "../actions/cartAction";
import ChecckOut from "../components/ChecckOut";
export default function CartScreen() {
  const cartstate = useSelector(state => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal=cartItems.reduce((x,item)=>x+item.price,0);
  const dispatch=useDispatch();
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>MY CART</h2>
          {cartItems.map(item => {
            return  <div className="flex-container">
                <div style={{ textAlign: "left"}} className="m-1 w-100">
                    <hr/>
                  <h1>{item.varient}</h1>
                  <h1>
                    Price: {item.quantity}*{item.Prices[0][item.varient]}={item.price}
                  </h1>
                  <h1 style={{display:'inline'}}>Quantity : </h1>
                  <i className="fa-solid fa-plus" aria-hidden='true' onClick={()=>{dispatch(addToCart(item, item.quantity + 1  , item.varient))}}></i>
                  <b>{item.quantity}</b>
                  <i className="fa-solid fa-minus" onClick={()=>{dispatch(addToCart(item, item.quantity - 1  , item.varient))}}></i>
                  <hr/>
                </div>
                <div className="m-1 w-100 m-5">
                  <img
                    src={item.Image}
                    style={{ height: "100px", width: "100px" }}
                  ></img>
                </div>
                <div className="m-1 w-100 m-5">
                  <i className="fa-solid fa-trash" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                </div>
              </div>
          })}
        </div>
        <div className="col-md-4" style={{textAlign:'right'}}>
          <h2 style={{fontSize:'45px',fontWeight:'800px'}}>SUBTOTAL: {subtotal}/-</h2>
          <ChecckOut subtotal={subtotal}/>
        </div>
      </div>
    </div>
  );
}
