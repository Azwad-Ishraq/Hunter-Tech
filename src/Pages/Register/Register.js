import React, { useState } from 'react';
import styles from './Register.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import { Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router';

const Register = () => {
    const {handleGoogleSignIn,registerUser} = useAuth();
    const [userData,setUserData] = useState({})
    const navigate = useNavigate()
    const location = useLocation()


    
    const handleSubmit = (e) => {
        e.preventDefault()
        registerUser(userData.email,userData.password,userData.name,navigate)
        
    }
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = {...userData}
        newUserData[field] = value
        setUserData(newUserData)
    }
    return (
        <>
        <Navbar></Navbar>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input onBlur={handleOnBlur} name='name' type="text" placeholder='Name' className={styles.input}/>
                    {/* <input type="text" placeholder='Last Name' className={styles.input}/>
                    <input type="text" placeholder='Username' className={styles.input}/> */}
                    <input onBlur={handleOnBlur} name='email' type="text" placeholder='Email' className={styles.input}/>
                    <input onBlur={handleOnBlur} name='password' type="text" placeholder='Password' className={styles.input}/>
                    {/* <input type="text" placeholder='Confirm Password' className={styles.input}/> */}
                    <div className={styles.aggrement}>
                        By Creating an account I accept all the <b>Terms and Conditions</b>
                    </div>
                    <div className={styles.buttons}>
                        <button type='submit' className={styles.button}>Create</button>
                        <div className={styles.divider}>
                            <Divider orientation="vertical" flexItem />
                        </div>
                        <div className={styles.googleIconContainer}>
                        <GoogleIcon onClick={()=> handleGoogleSignIn(location,navigate)} className={styles.googleIcon}></GoogleIcon>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};


export default Register;