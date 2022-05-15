import React from 'react';
import styles from './Cart.module.css'
import Annuncement from '../../Components/Announcement/Announcement'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import productImg from '../../images/slide3.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Divider } from '@mui/material';
import productImg2 from '../../images/slide2.png'
const Cart = () => {
    return (
        <div className={styles.container}>
            <Annuncement></Annuncement>
            <Navbar></Navbar>
            <div className={styles.wrapper}>

                <h1 className={styles.title}>YOUR ORDER SUMMERY</h1>


                <div className={styles.top}>

                    <button style={{border:'1px solid black',backgroundColor:'transparent'}} className={styles.topButton}>CONTINUE SHOPPING</button>

                    <div className={styles.topTexts}>
                        <span className={styles.topText}>YOUR ORDERS(2)</span>
                        <span className={styles.topText}>YOUR WISHLIST(0)</span>
                    </div>

                    <button style={{backgroundColor:'black',color:'white',border:'none'}} className={styles.topButton}>CHECKOUT NOW</button>

                </div>

                <div className={styles.bottom}>
                    <div className={styles.info}>
                        <div className={styles.product}>
                            <div className={styles.productDetail}>
                                <img className={styles.img} src={productImg} alt=""/>
                                <div className={styles.details}>
                                    <span className={styles.productName}>
                                       <b>Product:</b> Intel Core i7 11th gen 
                                    </span>
                                    <span className={styles.productId}><b>Product ID:</b> 0648901648</span>
                                    <div style={{
                                        backgroundColor:'black'
                                    }} className={styles.productColor}></div>
                                    <span className={styles.productVarient}><b>Varient:</b> rtx 3070 + 16g ram</span>

                                </div>
                            </div>
                            <div className={styles.priceDetail}>
                                <div className={styles.productAmountContainer}>
                                    <AddIcon></AddIcon>
                                    <div className={styles.productAmount}>2</div>
                                    <RemoveIcon></RemoveIcon>
                                </div>
                                <div className={styles.productPrice}>$1199</div>

                            </div>
                        </div>
                        <Divider />
                        <div className={styles.product}>
                            <div className={styles.productDetail}>
                                <img className={styles.img} src={productImg2} alt=""/>
                                <div className={styles.details}>
                                    <span className={styles.productName}>
                                       <b>Product:</b> Intel Core i7 11th gen 
                                    </span>
                                    <span className={styles.productId}><b>Product ID:</b> 0648901648</span>
                                    <div style={{
                                        backgroundColor:'black'
                                    }} className={styles.productColor}></div>
                                    <span className={styles.productVarient}><b>Varient:</b> rtx 3070 + 16g ram</span>

                                </div>
                            </div>
                            <div className={styles.priceDetail}>
                                <div className={styles.productAmountContainer}>
                                    <AddIcon></AddIcon>
                                    <div className={styles.productAmount}>2</div>
                                    <RemoveIcon></RemoveIcon>
                                </div>
                                <div className={styles.productPrice}>$1199</div>

                            </div>
                        </div>
                    </div>
                    <div className={styles.summary}>
                        <h1 className={styles.summaryTitle}>ORDER SUMMARY</h1>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryItemText}>Subtotal</span>
                            <span className={styles.summaryItemPrice}>$2800</span>
                        </div>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryItemText}>Estimated Shipping</span>
                            <span className={styles.summaryItemPrice}>$7.8</span>
                        </div>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryItemText}>Shipping Discount</span>
                            <span className={styles.summaryItemPrice}>$-2.6</span>
                        </div>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryItemText}>Total</span>
                            <span className={styles.summaryItemPrice}>$2805.2</span>
                        </div>
                        <button className={styles.button}>CHECKOUT NOW</button>
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Cart;