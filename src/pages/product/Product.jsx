import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Product= () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
              const response = await axios.get('https://dummyjson.com/products');
              setProducts(response.data.products);
            } catch (error) {
                console.log(error);
                
                }
              };
                getProduct();
              }, []); 
 
  return (
    <>
    <div>
        {products.map((product) =>(
            <div key={product.id}>
                <img src={product.thumbnail}/>
                <h3>{product.brand}</h3>
                <p>Price: ${product.price}</p>
                <button>Buy Now</button>
            </div>
        ))}
    </div>

      
    </>
  );
}

export default Product