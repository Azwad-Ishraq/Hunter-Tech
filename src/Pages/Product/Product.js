import React from 'react';
import styles from './Product.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import pcImg from '../../images/slide1.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Product = () => {
    return (
        <div className={styles.container}>
            <Announcement></Announcement>
            <Navbar></Navbar>

                <div className={styles.wrapper}>
                    <div className={styles.imgContainer}>
                        <img className={styles.img} src={pcImg} alt=""/>
                    </div>
                    <div className={styles.infoContainer}>
                        <h1 className={styles.title}>Title</h1>
                        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam odit magnam mollitia, repellendus saepe, suscipit molestiae ab blanditiis velit illum maiores, omnis ipsum provident est consectetur optio nostrum! Officia eius nobis exercitationem quidem voluptate nam reiciendis magnam? Blanditiis necessitatibus nisi iste earum, quas eaque molestias odit porro ullam tenetur? Exercitationem!
                        </p>
                        <span className={styles.price}>$899</span>
                        <div className={styles.filterContainer}>
                            <div className={styles.filter}>
                                <span className={styles.filterTitle}>COLOR</span>
                                <div style={{backgroundColor:'#ecf0f1'}} className={styles.filterColor}></div>
                                <div style={{backgroundColor:'black'}} className={styles.filterColor}></div>
                                <div style={{backgroundColor:'teal'}} className={styles.filterColor}></div>
                                <div style={{backgroundColor:'silver'}} className={styles.filterColor}></div>
                            </div>
                        </div>

                        <div className={styles.addContainer}>
                            <div className={styles.amountContainer}>
                                <RemoveIcon className={styles.remove}></RemoveIcon>
                                <span className={styles.amount}>1</span>
                                <AddIcon className={styles.add}></AddIcon>
                            </div>
                            <button className={styles.button}>ADD TO CART</button>
                        </div>
                    </div>
                </div>

            
            <Footer></Footer>
        </div>
    );
};

export default Product;