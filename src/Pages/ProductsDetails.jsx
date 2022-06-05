import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
const ProductsDetails = () => {
    const {id}=useParams();
    const [data,setData]=React.useState({});
    useEffect(()=>{
        axios.get(`http://localhost:3004/products/${id}`)
        .then(res => {
           
            setData(res.data);
        })
        .catch(err => {
            setData(err.request.status);
        })
    },[id]);
    return ( data===404?<div><h1>Product does not exist</h1></div>:
        <div>
            <h1>Products Details</h1>
            <h2>{id}</h2>
            <h2>Product:{data.name}</h2>
            <h2>Price:${data.price}</h2>
        </div>
    );
};

export default ProductsDetails;