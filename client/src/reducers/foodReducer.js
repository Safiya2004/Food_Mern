export const getAllFoodReducer=(state={datas:[]},action)=>{
    switch(action.type)
    {
        case 'GET_DATAS_REQUEST':return{
            loading:true,
            ...state
        }
        case 'GET_DATAS_SUCCESS':return{
            loading:false,
            datas:action.payload
        }
        case 'GET_DATAS_FAILED':return{
            loading:false,
            error:action.payload
        }
        default:return state
    }
}
export const getItemByIdReducer=(state={},action)=>{
  switch(action.type)
  {
      case 'GET_ITEMBYID_REQUEST':return{
          loading:true,
          ...state
      }
      case 'GET_ITEMBYID_SUCCESS':return{
          loading:false,
          data:action.payload
      }
      case 'GET_ITEMBYID_FAILED':return{
          loading:false,
          error:action.payload
      }
      default:return state
  }
}
export const addItemReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ITEM_REQUEST':
      return { loading: true, ...state };
    case 'ADD_ITEM_SUCCESS':
      return { loading: false, success: true, newItem: action.payload };
    case 'ADD_ITEM_FAILED':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const editItemReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_ITEM_REQUEST':
      return { editloading: true, ...state };
    case 'EDIT_ITEM_SUCCESS':
      return { editloading: false, editsuccess: true, editedItem: action.payload };      
    case 'EDIT_ITEM_FAILED':
      return { editloading: false, editerror: action.payload };
    default:
      return state;
  }
};
