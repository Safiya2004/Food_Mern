import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';   
import Pizza from '../components/Pizza.js';
import { getAllDatas } from '../actions/foodAction.js';
import Loading from '../components/Loading.js';
import Error from '../components/Error.js';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const foodstate = useSelector(state => state.getAllFoodReducer);
    const { datas, error, loading } = foodstate;
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        dispatch(getAllDatas());
    }, [dispatch]);

    useEffect(() => {
        setMenuData(datas); // Initialize menuData with fetched data
    }, [datas]);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(datas); // Reset to show all items
        } else {
            const updatedList = datas.filter((curElem) => curElem.Category === category);
            setMenuData(updatedList);
        }
    };

    return (
        <div>
            <nav className='navi'>
                <div className='btn-group'>
                    <button className='btn-group__item' onClick={() => filterItem("Breakfast")}>Breakfast</button>
                    <button className='btn-group__item' onClick={() => filterItem("Lunch")}>Lunch</button>
                    <button className='btn-group__item' onClick={() => filterItem("Dinner")}>Dinner</button>
                    <button className='btn-group__item' onClick={() => filterItem("Sweets")}>Sweets</button>
                    <button className='btn-group__item' onClick={() => filterItem("Desserts")}>Desserts</button>
                    <button className='btn-group__item' onClick={() => filterItem("Beverages(Drinks)")}>Beverages</button>
                    <button className='btn-group__item' onClick={() => filterItem("All")}>All</button>
                </div>
            </nav>
            <div className='row justify-content-center'>
                {loading ? <Loading /> : error ? <Error error='Something Went Wrong' /> : (
                    menuData.map((pizza) => (
                        <div className='col-md-4' key={pizza._id}>
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
