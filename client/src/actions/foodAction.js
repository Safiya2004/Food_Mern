import axios from"axios";
export const getAllDatas=()=> async dispatch=>{
    dispatch({type:'GET_DATAS_REQUEST'})
    try{
        const response= await axios.get('/api/datas/getalldatas')
        console.log(response);
        dispatch({type:'GET_DATAS_SUCCESS',payload:response.data})
    }
    catch(error){
        dispatch({type:'GET_DATAS_FAILED',payload:error})
    }
}
export const getItemById=(itemid)=> async dispatch=>{
  dispatch({type:'GET_ITEMBYID_REQUEST'})
  try{
      const response= await axios.post('/api/datas/getitembyid',{itemid})
      console.log(response);
      dispatch({type:'GET_ITEMBYID_SUCCESS',payload:response.data})
  }
  catch(error){
      dispatch({type:'GET_ITEMBYID_FAILED',payload:error})
  }
}
export const addItem = (item) => async (dispatch) => {
  dispatch({ type: 'ADD_ITEM_REQUEST' });
  try {
    const response = await axios.post('/api/datas/additems',{item});
    dispatch({ type: 'ADD_ITEM_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_ITEM_FAILED', payload: error.message });
  }
};
