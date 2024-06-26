import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { deleteUser, getAllUsers } from '../actions/userAction';
export default function UsersList() {
  const dispatch=useDispatch();
  const usersstate=useSelector(state=>state.getAllUserReducer)
  const {loading,error,users}=usersstate
  useEffect(()=>{
    dispatch(getAllUsers())
  },[])
  return (
    <div>
      <h1>Users List</h1>
      {loading && (<Loading/>)}
      {error && (<Error error="Something went Wrong"/>)}
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map(user=>{
            return <tr>
              <td>
                {user._id}
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
