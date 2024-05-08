import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../actions/foodAction';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

export default function AddNewItem() {
    const [name, setName] = useState('');
    const [variants, setVariants] = useState([{ name: '', price: '' }]);
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();
    const additemstate = useSelector(state => state.addItemReducer);
    const { success, loading, error } = additemstate;

    const handleVariantChange = (index, key, value) => {
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
        const item = {
            name,
            image,
            description,
            category,
            variants: variants.map(variant => variant.name),
            prices: [formattedPrices]
        };
        dispatch(addItem(item));
    };

    return (
        <div>
            <div>
                <h1>Add New Item</h1>
                {loading && (<Loading />)}
                {error && (<Error error='Something went wrong' />)}
                {success && (<Success success='New Item Added Successfully' />)}
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
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
}
