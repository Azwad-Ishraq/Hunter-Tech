import React, { useState } from 'react';
import styles from './Navbar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { Badge, Tooltip } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useAuth from '../../hooks/useAuth';
import UserDetailsModal from './UserDetailsModal/UserDetailsModal';


const Navbar = () => {
    const { user } = useAuth()
    
    const [showProfileModal,setShowProfileModal] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.language}>EN</div>
                    <div className={styles.searchContainer}>
                        <input type="text" className={styles.input} name="" id="" />
                        <SearchIcon className={styles.searchIcon} style={{ color: 'gray', fontSize: 16 }}></SearchIcon>

                    </div>
                </div>
                <div className={styles.center}>
                    <h1 className={styles.logo}>HUNTER TECH</h1>
                </div>
                <div className={styles.right}>

                    <Link to='/' className={styles.menuItem}>HOME</Link>


                    {
                        user.email ?
                            <span></span>
                            :
                            <Link to='/register' className={styles.menuItem}>REGISTER</Link>
                    }
                        
                    {
                        user.email ?
                            <div className={styles.profileIconContainer} to='/profile'>
                                
                                    <AccountCircleIcon onClick={()=> setShowProfileModal(!showProfileModal)} color='action' className={styles.profileIcon}></AccountCircleIcon>
                                
                            </div>
                            :
                            <Link to='/login' className={styles.menuItem}>SIGN IN</Link>

                    }
                    <Link to='/cart'>
                        <Badge style={{ cursor: 'pointer' }} badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </Link>


                    {
                        showProfileModal?
                        <UserDetailsModal setShowProfileModal={setShowProfileModal} user={user}></UserDetailsModal>
                        :
                        <span></span>
                    }
                    



                </div>
            </div>
        </div>
    );
};

export default Navbar;