import { Avatar, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import styles from './UserDetailsModal.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useAuth from '../../../hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
const UserDetailsModal = ({user,setShowProfileModal}) => {
    console.log(user)
    const {logout} = useAuth()

    const handleLogout = () => {
        logout();
        setShowProfileModal(false);
    }
    return (
        <>
        <CloseIcon onClick={()=> setShowProfileModal(false)} className={styles.closeIcon}></CloseIcon>
        <div className={styles.container}>
            <div className={styles.top}>
            <Avatar className={styles.avatar} alt="User Photo" src={user.photoURL} />
            <h3 className={styles.userName}>{user.displayName}</h3>
            <h5 className={styles.userEmail}>{user.email}</h5>
            </div>
            <Divider />

            <List>

                <ListItem button>
                    <ListItemIcon>
                            <SettingsIcon></SettingsIcon>
                    </ListItemIcon>
                    <ListItemText primary='Settings'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                            <PersonIcon></PersonIcon>
                    </ListItemIcon>
                    <ListItemText primary='Profile'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                            <DashboardIcon></DashboardIcon>
                    </ListItemIcon>
                    <ListItemText primary='Dashboard'/>
                </ListItem>

                {
                    user.email?
                    <ListItem button onClick={()=> handleLogout()}>
                    <ListItemIcon>
                            <LogoutIcon></LogoutIcon>
                    </ListItemIcon>
                    <ListItemText primary='Logout'/>
                </ListItem>
                    :
                    <span></span>
                }

            </List>
        </div>
        </>
    );
};

export default UserDetailsModal;