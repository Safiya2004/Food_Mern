import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderAction";
import Loading from "../components/Loading";
import Error from "../components/Error";
export default function OrderScreen() {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrderReducer);
  const { orders, error, loading } = orderstate;
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <div>
      <h2 style={{ fontSize: "35px" }}>My Orders</h2>
      <hr></hr>
      <div className="row justify-content-center" >
        {loading && <Loading />}
        {error && <Error error="Something went Wrong" />}
        {orders &&
          orders.map((order) => {
            return (
              <div className="col-md-8 m-2"style={{backgroundColor:'limegreen',color:'white'}}>
                <div className="flex-container">
                  <div style={{textAlign:'left'}} className="w-100 m-1">
                    <h2 style={{ fonstSize: "25x" }}>Items</h2>
                    <hr></hr>
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <p>
                            {item.varient}*{item.quantity}={item.price}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div style={{textAlign:'left'}} className="w-100 m-1">
                    <h2 style={{ fonstSize: "25px" }}>Address</h2>
                    <hr></hr>
                    <p>Street:{order.shippingAddress.street}</p>
                    <p>City:{order.shippingAddress.city}</p>
                    <p>Country:{order.shippingAddress.country}</p>
                    <p>Pincode:{order.shippingAddress.pincode}</p>
                  </div>
                  <div style={{textAlign:'left'}} className="w-100 m-1">
                  <h2 style={{ fonstSize: "25px" }}>Order Info</h2>
                  <hr></hr>
                  <p>Order Amount:{order.orderAmount}</p>
                  <p>Date:{order.createdAt.substring(0,10)}</p>
                  <p>Transaction Id:{order.transactionId}  </p>
                  <p>Order Id:{order._id}  </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
