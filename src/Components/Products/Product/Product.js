import React from 'react';
import styles from './Product.module.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
const Product = ({item}) => {
    return (
        <Link to='/product'>

        
        <div className={styles.container}>

           

            <img className={styles.img} src={item.img} alt=""/>

            <div className={styles.info}>
            <div className={styles.icon}>
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            </div>

            <div className={styles.icon}>
                <SearchOutlinedIcon></SearchOutlinedIcon>
            </div>

            <div className={styles.icon}>
                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
            </div>
            </div>

            

        </div>
        </Link>
    );
};

export default Product;