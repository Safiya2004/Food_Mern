import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { deliverOrder, getAllOrders } from '../actions/orderAction';
export default function OrdersList() {
  const dispatch=useDispatch();
  const getordersstate=useSelector(state=>state.getAllOrderReducer)
  const {loading,error,orders}=getordersstate
  useEffect(()=>{
    dispatch(getAllOrders())
  },[])
  return (
    <div>
      <h2>Orders List</h2>
      {loading && <Loading />}
      {error && <Error error="Something Went Wrong" />}
      <table className="table table-striped table-bordered">
        <thead className="thead">
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0,10)}</td>
                  <td>
                    {order.isDelivered ? (<h1>Delivered</h1>) : (<button className='btn' onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</button>)}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  )
}
