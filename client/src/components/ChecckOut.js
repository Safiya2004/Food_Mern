import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderAction';
import Loading from '../components/Loading';
import Success from '../components/Success'
import Error from '../components/Error'
export default function ChecckOut({subtotal}) {
  const orderstate=useSelector((state)=>state.placeOrderReducer)
  const {loading,error,success}=orderstate
    const dispatch=useDispatch()
    function tokenHandler(token)
    {
        console.log("token:",token);
        dispatch(placeOrder(token,subtotal))
    }
  return (
    <div>
      {loading && (<Loading/>)}
      {error && (<Error error='Something Went Wrong'/>)}
      {success && (<Success success="Your Order Placed Successfully"/>)}
      <StripeCheckout amount={subtotal*100} shippingAddress token={tokenHandler} currency='INR' stripeKey='pk_test_51P906jSFwbB1dw3sPrH64cqc4cdIXsV8vCPx5biXhRXhsIcNsAnxOk799DxpIEzmSHsyW1A9fZvArXdx7GrOznVI00y0TI5vGE'>
        <button className='btn'>Pay Now</button>
      </StripeCheckout>
    </div>
  )
}
