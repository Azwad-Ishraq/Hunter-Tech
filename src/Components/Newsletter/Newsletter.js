import React from 'react';
import styles from './Newsletter.module.css'
import SendIcon from '@mui/icons-material/Send';
const Newsletter = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Newsletter</h1>

            <div className={styles.description}>GET TIMELY UPDATES OF YOUR FAVORITE PRODUCTS</div>

            <div className={styles.inputContainer}>
                <input placeholder="Your Email" className={styles.input} type="text"/>
                <button className={styles.button}>
                    <SendIcon className={styles.sendIcon}></SendIcon>
                </button>
            </div>

        </div>
    );
};

export default Newsletter;