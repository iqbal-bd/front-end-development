import React from 'react';
import {useParams, useSearchParams} from 'react-router-dom';

const Product = () => {
    let {name,price} = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
    console.log(searchParams.get("price"));
    console.log(searchParams.get("sort"));
    return (
        <div>
            <h3>Product Name - {name}</h3>
            <h3>Product Price - {price}</h3>

        </div>
    );
};

export default Product;