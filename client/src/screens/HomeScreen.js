import React, {useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';   
import Pizza from '../components/Pizza.js';
import { getAllDatas } from '../actions/foodAction.js';
import Loading from '../components/Loading.js';
import Error from '../components/Error.js';
export default function HomeScreen() {
    const dispatch=useDispatch();
    const foodstate=useSelector(state=>state.getAllFoodReducer);
    const {datas , error , loading}=foodstate;
    useEffect(()=>{
        dispatch(getAllDatas())
    },[])
  return (
    <div>
        <div className='row justify-content-center'>
            {loading ? <Loading />: error ? <Error error='Something Went Wrong'/>: (
                datas.map((pizza)=>{
                    console.log(pizza)
                    return (<div className='col-md-4' key={pizza._id}>
                        <div>
                            <Pizza pizza={pizza}/>
                        </div>
                    </div>
                    );
                })
            )}
        </div>
    </div>
  )
}
