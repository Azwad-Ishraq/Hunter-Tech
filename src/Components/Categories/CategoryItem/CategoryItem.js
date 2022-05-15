import React from 'react';
import styles from './CategoryItem.module.css'
const CategoryItem = ({item}) => {
    return (
        <div className={styles.container}>

            <img className={styles.img} src={item.img} alt=""/>

            <div className={styles.info}>
                <h1 className={styles.title}>{item.title}</h1>
                <button className={styles.button}>Details</button>
            </div>
        </div>
    );
};

export default CategoryItem;