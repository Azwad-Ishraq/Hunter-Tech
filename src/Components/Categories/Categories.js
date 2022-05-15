import React from 'react';
import styles from './Categories.module.css'
import {categories} from '../../data'
import CategoryItem from './CategoryItem/CategoryItem';
const Categories = () => {
    return (
        <div className={styles.container}>
            {
                categories.map(item => (
                    <CategoryItem key={item.id} item={item}></CategoryItem>
                ))
            }
        </div>
    );
};

export default Categories;