import { Button } from "@mui/material";
import { Product } from "../../models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

interface Props {
    products : Product[];
    addProduct : () => void;
}

export default function Catelog ()
{ const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    fetch('http://localhost:5000/api/Product')
    .then(response => 
        response.json()
      )
    .then(data =>{
    
      setProducts(data);
    })
  
    .catch(error => console.error('lỗi rồi:', error)); // Bắt lỗi fetch
  }, []);
  
    return (
        <>
      <ProductList products = {products}/>
      
      </>
    )
}