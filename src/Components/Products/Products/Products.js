import React from 'react';
import styles from './Products.module.css'
import {popularProducts} from '../../../data'
import Product from '../Product/Product';
const Products = () => {
    return (
        <div className={styles.popularProducts}>
            <h1>POPULAR PRODUCTS</h1>
            <div className={styles.container}>
            {
                popularProducts.map(item => (
                    <Product key={item.id} item={item}></Product>
                ))
            }
            </div>
        </div>
    );
};

export default Products;