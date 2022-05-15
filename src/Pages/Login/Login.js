import React, { useState } from 'react';
import styles from './Login.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import useAuth from '../../hooks/useAuth';
import { useLocation,useNavigate } from 'react-router';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {

    const {loginUser,handleGoogleSignIn} = useAuth()
    const [loginData,setLoginData] = useState({})
    const location = useLocation()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(loginData.email,loginData.password,location,navigate)
        console.log(loginData)
    }

    const handleOnBlur = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        newLoginData[field] = value
        setLoginData(newLoginData)

    }

    return (
        <>
        <Navbar></Navbar>
        <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>SIGN IN</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input onBlur={handleOnBlur} name='email' type="text" placeholder='Email' className={styles.input}/>
                <input onBlur={handleOnBlur} name='password' type="text" placeholder='Password' className={styles.input}/>
                <button  type='submit'  className={styles.button}>LOG IN</button>
                <div className={styles.googleIconContainer}>
                    <GoogleIcon onClick={()=> handleGoogleSignIn(location,navigate)} className={styles.googleIcon}></GoogleIcon>
                </div>
                
                <a className={styles.link} href="">FORGOT PASSWORD??</a>
                <a className={styles.link} href="">CREATE A NEW ACCOUNT</a>
                
            </form>
        </div>
    </div>
    </>
    );
};

export default Login;