import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading.js";
import Error from "../components/Error.js";
import { deleteItem, getAllDatas } from "../actions/foodAction.js";
import { Link } from "react-router-dom";
export default function ItemsList() {
  const dispatch = useDispatch();
  const foodstate = useSelector((state) => state.getAllFoodReducer);
  const { datas, error, loading } = foodstate;
  useEffect(() => {
    dispatch(getAllDatas());
  }, [dispatch]);
  return (
    <div>
      <h2>Items List</h2>
      {loading && <Loading />}
      {error && <Error error="Something Went Wrong" />}
      <table className="table table-dark table-bordered">
        <thead className="thead">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {datas &&
            datas.map((data) => {
              return (
                <tr key={data._id}>
                  <td>{data.name}</td>
                  <td>
                    {data.varients.map((varient) => {
                      return (
                        <div>
                          <p>
                            {varient}: {data.Prices[0][varient]}
                          </p>
                        </div>
                      );
                    })}
                  </td>
                  <td>{data.Category}</td>
                  <td>
                    <i className="fa fa-trash" onClick={()=>dispatch(deleteItem(data._id))}></i>
                    <Link to={`/admin/edititem/${data._id}`}>
                      <i className="fa fa-edit m-2"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
