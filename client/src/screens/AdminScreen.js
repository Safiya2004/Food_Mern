import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersList from "./UsersList";
import OrdersList from "./OrdersList";
import ItemsList from "./ItemsList";
import AddNewItem from "./AddNewItem";
import {Route,Routes} from "react-router";
import { Link } from "react-router-dom";
import EditScreen from "./EditScreen";
export default function AdminScreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>
          <ul className="adminfunctions">
            <li>
              <Link style={{textDecoration:'none'}} to="/admin/userslist">
                Users List
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:'none'}} to="/admin/itemslist">Items List</Link>
            </li>
            <li>
              <Link style={{textDecoration:'none'}} to="/admin/addnewitem">Add New Item</Link>
            </li>
            <li>
              <Link style={{textDecoration:'none'}} to="/admin/orderslist">Orders List</Link>
            </li>
          </ul>
          <Routes> 
          <Route path='/'element={<UsersList/>} ></Route>   
            <Route path='/userslist'element={<UsersList/>} ></Route>
            <Route path='/orderslist'element={<OrdersList/>} ></Route>
            <Route path='/itemslist'element={<ItemsList/>} ></Route>
            <Route path='/addnewitem'element={<AddNewItem/>} ></Route>
            <Route path='/edititem/:itemid'element={<EditScreen/>} ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
