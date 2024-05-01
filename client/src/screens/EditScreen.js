import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getItemById } from '../actions/foodAction';
export default function EditScreen() {
    const { itemid } = useParams();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getItemById(itemid))
    },[])
  return (
    <div>
      <h1>Edit Item</h1>
      <h1>Item Id={itemid}</h1>
    </div>
  )
}
