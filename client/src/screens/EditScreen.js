import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';
import { editItem, getItemById } from '../actions/foodAction';
export default function EditScreen() {
    const { itemid } = useParams();
    const dispatch=useDispatch();
    const [name, setName] = useState('');
    const [variants, setVariants] = useState([]);
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const getitembyidstate=useSelector(state=>state.getItemByIdReducer)
    const {data,loading,error}=getitembyidstate
    const edititemstate=useSelector(state=>state.editItemReducer)
    const {editloading,editerror,editsuccess}=edititemstate
    useEffect(() => {
        if (!data || (data && data._id !== itemid)) {
            dispatch(getItemById(itemid));
        } else {
            setName(data.name);
                setDescription(data.Description);
                setCategory(data.Category);
                if (data.varients) {
                    console.log("data.varients:", data.varients);
                    const formattedVariants = data.varients.map(variant => ({
                        name: variant|| '',
                        price: data.Prices[0][variant] || ''
                    }));
                    console.log(formattedVariants)
                    setVariants(formattedVariants);
                } else {
                    setVariants([{ name: '', price: '' }]);
                }
                setImage(data.Image);
        }
    }, [data, dispatch, itemid]);
    const handleVariantChange = (index, key, value) => 
    {
      const updatedVariants = [...variants];
      updatedVariants[index][key] = value;
      setVariants(updatedVariants);
    };

  const handleAddVariant = () => {
      setVariants([...variants, { name: '', price: '' }]);
  };

  const handleRemoveVariant = (index) => {
      const updatedVariants = [...variants];
      updatedVariants.splice(index, 1);
      setVariants(updatedVariants);
  };

  const formHandler = (e) => {
      e.preventDefault();
      const formattedPrices = variants.reduce((acc, curr) => {
        acc[curr.name] = curr.price;
        return acc;
    }, {});
      const updatedItem = {
        _id:itemid,
          name,
          image,
          description,
          category,
          variants: variants.map(variant => variant.name),
          prices: [formattedPrices]
      };
      dispatch(editItem(updatedItem))
      console.log("updatedItem:",updatedItem)
  };
  return (
    <div>
      <h1>Edit Item</h1>
      <h1>Item Id={itemid}</h1>
      <div>
                {loading && (<Loading />)}
                {error && (<Error error='Something went wrong' />)}
                {editsuccess && (<Success success="Item details edited successfully"/>)}
                {editloading && (<Loading />)}
                <form onSubmit={formHandler}>
                    <input className='form-control'
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {variants.map((variant, index) => (
                        <div key={index}>
                            <input className='form-control'
                                type='text'
                                placeholder={`Variant ${index + 1} name`}
                                value={variant.name}
                                onChange={(e) => handleVariantChange(index, 'name', e.target.value)}
                            />
                            <input className='form-control'
                                type='text'
                                placeholder={`Variant ${index + 1} price`}
                                value={variant.price}
                                onChange={(e) => handleVariantChange(index, 'price', e.target.value)}
                            />
                            {variants.length > 1 && (
                                <button type='button' className='btn' onClick={() => handleRemoveVariant(index)}>
                                    Remove Variant
                                </button>
                            )}
                        </div>
                    ))}
                    <input className='form-control'
                        type='text'
                        placeholder='Image URL'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <input className='form-control'
                        type='text'
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input className='form-control'
                        type='text'
                        placeholder='Category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <button type='button' className='btn mt-3' onClick={handleAddVariant}>
                        Add Variant
                    </button>
                    <button type='submit' className='btn mt-3' style={{ display: 'block' }}>
                        Edit Item
                    </button>
                </form>
            </div>

    </div>
  )
}
