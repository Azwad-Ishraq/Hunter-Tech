import React from 'react';
import styles from './ProductList.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Announcement from '../../Components/Announcement/Announcement'
import Products from '../../Components/Products/Products/Products'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer'
const ProductList = () => {
    return (
        <div className={styles.container}>
            <Announcement></Announcement>
            <Navbar></Navbar>
            <h1 className={styles.title}>Products</h1>

            <div className={styles.filterContainer}>
                <div className={styles.filter}>
                    <span className={styles.filterText}>Filter Products</span>

                    <select className={styles.select} name="" id="">
                        <option disabled className={styles.option} value="">All</option>
                        <option className={styles.option} value="">Accessories</option>
                        <option className={styles.option} value="">PC</option>
                        <option className={styles.option} value="">Camera</option>
                        <option className={styles.option} value="">Laptops</option>
                    </select>
                    </div>
                <div className={styles.filter}>
                    <span className={styles.filterText}>Sort Products</span>

                    <select className={styles.select} name="" id="">
                        <option disabled className={styles.option} value="">Price</option>
                        <option className={styles.option} value="">Lowest</option>
                        <option className={styles.option} value="">Higest</option>
                    </select>
                    </div>
            </div>
            <Products></Products>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default ProductList;
