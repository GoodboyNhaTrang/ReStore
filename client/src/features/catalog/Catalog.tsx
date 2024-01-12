
import { Product } from "../../models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

interface Props {
    products : Product[];
    addProduct : () => void;
}

export default function Catalog ()
{ const [products, setProduct] = useState<Product[]>([]);


  useEffect(() => {
    fetch('http://localhost:5000/api/Product')
    .then(response => 
        response.json()
      )
    .then(data =>{
    
      setProduct(data);
    })
  
    .catch(error => console.error('lỗi rồi:', error)); // Bắt lỗi fetch
  }, []);
  
    return (
        <>
      <ProductList products = {products}/>
      
      </>
    )
}