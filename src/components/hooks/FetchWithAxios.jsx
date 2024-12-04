import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchWithAxios = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchData = async () =>{
            const res = await axios.get('https://dummyjson.com/products')
        //    console.log(res);
           setProducts(res.data.products)
           
        }
        fetchData()
    }, [])
  return (
    <>
      {products.map((product, index)=>(
        <div key={index}>
            <p>{product.brand}</p>
        </div>
      ))}
    </>
  )
}

export default FetchWithAxios
