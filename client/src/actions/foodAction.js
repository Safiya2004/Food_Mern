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
export const editItem = (updatedItem) => async (dispatch) => {
  dispatch({ type: 'EDIT_ITEM_REQUEST' });
  try {
    const response = await axios.post('/api/datas/edititems',{updatedItem});
    console.log(response)
    dispatch({ type: 'EDIT_ITEM_SUCCESS', payload: response.data });
    window.location.href='/admin/itemslist'
  } catch (error) {
    dispatch({ type: 'EDIT_ITEM_FAILED', payload: error.message });
  }
};
export const deleteItem=(itemid)=>async dispatch=>{
  try {
    const response=await axios.post('/api/datas/deleteitem',{itemid})
    alert("Pizza deleted successfully")
    console.log(response)
    window.location.reload()
  } catch (error) {
    alert("Somethiing went wrong")
    console.log(error)
  }
}