import { combineReducers } from "redux";
import { createStore,applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from "@redux-devtools/extension";
import { addItemReducer, editItemReducer, getAllFoodReducer, getItemByIdReducer } from "./reducers/foodReducer";
import { cartReducer } from "./reducers/cartReducer";
import { getAllUserReducer, loginUserReducer, registerUserReducer } from "./reducers/userReducer";
import { placeOrderReducer,getUserOrderReducer, getAllOrderReducer } from "./reducers/orderReducer";
const finalReducer=combineReducers({
    getAllFoodReducer:getAllFoodReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrderReducer:getUserOrderReducer,
    addItemReducer:addItemReducer,
    getItemByIdReducer:getItemByIdReducer,
    editItemReducer:editItemReducer,
    getAllOrderReducer:getAllOrderReducer,
    getAllUserReducer:getAllUserReducer
})
const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]
const currentUser=localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')):null
const initialState={
    cartReducer:{
        cartItems:cartItems
    },
    loginUserReducer:{
        currentUser:currentUser
    }
}
const composeEnhancers=composeWithDevTools({})
const store=createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))
export default store