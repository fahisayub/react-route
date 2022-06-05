import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const AllProducts = () => {
    const [products,setProducts] = React.useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3004/products')
        .then(res => {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    
    return (
        <div>
            <h1>All Products</h1>
            <table>
                <thead>
                    <tr>
                    <th>id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(({name,id,price}) => {
                        return <tr key={id}>
                            <td>{id}</td>
                        <td><Link to={`/products/${id}`}>{name}</Link></td>
                        <td>{price}</td>
                        </tr>
                    }
                    )}
                </tbody>
                        
            </table>



            
        </div>
    );
};

export default AllProducts;