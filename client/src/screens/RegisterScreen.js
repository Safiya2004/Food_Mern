import React,{useState,useEffect} from 'react';
import{useDispatch,useSelector} from 'react-redux'
import { registerUser } from '../actions/userAction';
import Loading from '../components/Loading';
import Success from '../components/Success'
import Error from '../components/Error'
export default function RegisterScreen() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[Password,setPassword]=useState('');
    const[cpassword,setCpassword]=useState('');
    const registerstate =useSelector(state=>state.registerUserReducer)
    const {error,loading,success}=registerstate
    const dispatch=useDispatch()
    function register()
    {
        if(Password!==cpassword)
        {
            alert(`passwords didn't match`);
        }
        else{
            const user={
                name,email,Password
            }
            console.log(user)
            dispatch(registerUser(user))
        }
    }
  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded'>
                {loading && (<Loading/>)}
                {success && (<Success success='User registered Successfully'/>)}
                {error && (<Error error='Already registered using this email'/>)}
            <h2 style={{fontSize:'40px',textAlign:'center',margin:'20px'}}>Register</h2>
                <div>
                    <input required  type='text' placeholder='name' className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input required type='text' placeholder='email' className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input required type='password' placeholder='Password' className='form-control' value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <input required type='password' placeholder='Confirm Password' className='form-control'value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}/>
                    <button className='btn mt-3 mb-3' onClick={register}>REGISTER</button>
                    <br></br>
                    <a href='/login' className='reg' style={{color:'black',textDecoration:'none',fontWeight:'bold'}}>Click Here To Login</a> 
                </div>
            </div>
        </div>
    </div>
  )
}
