import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { initializeUser, loginUser } from '../actions/userAction';
import Loading from '../components/Loading';
import Error from '../components/Error';
export default function LoginScreen() {
  const[name,setName]=useState('');
  const[Password,setPassword]=useState('');
  const loginstate=useSelector(state=>state.loginUserReducer)
  const {loading,error}=loginstate;
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(initializeUser());
  },[])
  function login()
  {
    const user={
      name,Password
    }
    dispatch(loginUser(user));
  }
  return (
    <div>
      <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded'>
            <h2 style={{fontSize:'40px',textAlign:'center',margin:'20px'}}>Login</h2>
            {loading && <Loading/>}
            {error && <Error error='Invalid credentials'/>}
                <div>
                    <input required  type='text' placeholder='name' className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input required type='password' placeholder='Password' className='form-control' value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button className='btn mt-3 mb-3' onClick={login}>LOGIN</button>
                    <br></br>
                    <a href='/register' className='reg' style={{color:'black',textDecoration:'none',fontWeight:'bold'}}>Do not Have an Account Yet?Click Here To Register</a> 
                </div>
            </div>
        </div>
    </div>
  )
}
