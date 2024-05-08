export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
    const existingItemIndex = state.cartItems.findIndex((item) => (item._id === action.payload._id) && (item.varient === action.payload.varient));
    if (existingItemIndex !==-1 )
    {
        return {
          ...state,
          cartItems: state.cartItems.map(item=>(item._id===action.payload._id) && (item.varient === action.payload.varient) ? action.payload:item)
        };
    }
    else
    {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        }
    }
    case 'DELETE_FROM_CART' : return{
      ...state,
      cartItems:state.cartItems.filter(item=> (item._id !==action.payload._id) || (item.varient !== action.payload.varient))
    }
    default: return state;
  }
};
