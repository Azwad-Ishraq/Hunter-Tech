import React from 'react';
import styles from './Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const Footer = () => {
    return (
        <div className={styles.container}>


            <div className={styles.left}>
                <h1 className={styles.logo}>
                    HUNTER TECH
                </h1>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat pariatur sint facere quis perferendis illum atque facilis quibusdam dignissimos porro. At minus numquam molestiae quis harum nesciunt eveniet sit, adipisci natus, necessitatibus saepe. Alias saepe nihil sequi necessitatibus. Porro voluptas ea nostrum in corrupti eius placeat. Porro, qui? Sequi, eaque?
                </p>
                <div className={styles.socialContainer}>
                    <div style={{backgroundColor:'#4867aa'}} className={styles.socialIcon}>
                        <FacebookIcon></FacebookIcon>
                    </div>
                    <div style={{backgroundColor:'#e44460'}} className={styles.socialIcon}>
                        <InstagramIcon></InstagramIcon>
                    </div>
                    <div style={{backgroundColor:'#5da9dd'}} className={styles.socialIcon}>
                        <TwitterIcon></TwitterIcon>
                    </div>
                    <div style={{backgroundColor:'#b7071b'}} className={styles.socialIcon}>
                        <PinterestIcon></PinterestIcon>
                    </div>
                </div>
            </div>

            <div className={styles.center}>
                <h3 className={styles.title}>Useful Links</h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Cart</li>
                    <li className={styles.listItem}>Pc</li>
                    <li className={styles.listItem}>Laptops</li>
                    <li className={styles.listItem}>Accessories</li>
                    <li className={styles.listItem}>Mac</li>
                    <li className={styles.listItem}>My Account</li>
                    <li className={styles.listItem}>Order Tracking</li>
                    <li className={styles.listItem}>Wishlist</li>
                    <li className={styles.listItem}>Wishlist</li>
                    <li className={styles.listItem}>Terms</li>
                </ul>
            </div>
            <div className={styles.right}>
                <h3 className={styles.title}>Contact</h3>
                <div className={styles.contactItem}>
                
                    <LocationOnOutlinedIcon style={{marginRight:'10px'}}></LocationOnOutlinedIcon>
                    Lorem ipsum dolor sit, amet consectetur adipisicing.

                </div>
                <div className={styles.contactItem}>
                    <LocalPhoneOutlinedIcon style={{marginRight:'10px'}}></LocalPhoneOutlinedIcon>
                    0162678459
                </div>
                <div className={styles.contactItem}>
                    <EmailOutlinedIcon style={{marginRight:'10px'}}></EmailOutlinedIcon>
                    contact@hunterTech.com
                </div>
            </div>


        </div>
    );
};

export default Footer;