import { useState, useEffect } from 'react';

import ProductList from './ProductList';
import agent from '../../app/api/agent';
import { Product } from '../../models/product';
import LoadingComponent from '../../app/layout/LoadingComponent';


export default function Catalog() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        agent.Catalog.list()
            .then(products => {
                setProducts(products)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [])


    if (loading) return <LoadingComponent message='Loading products...' />

    return (
        <>
            <ProductList products={products} />
        </>
    )
}