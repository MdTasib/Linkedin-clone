import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import House from '@material-ui/icons/House';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import linkedin from '../../images/svg/linkedin.svg';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import firebase from 'firebase';
import { logout } from '../../features/userSlice';

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        firebase.auth().signOut();
    };

    return (
        <header className='header'>
            <div className="header__left">
                <a href="/">
                    <img src={linkedin} alt="" />
                </a>

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption
                    Icon={House}
                    title='Home'
                />
                <HeaderOption
                    Icon={SupervisorAccount}
                    title='My Network'
                />
                <HeaderOption
                    Icon={BusinessCenterIcon}
                    title='Jobs'
                />
                <HeaderOption
                    Icon={ChatIcon}
                    title='Messaging'
                />
                <HeaderOption
                    Icon={NotificationsIcon}
                    title='Notifications'
                />
                <HeaderOption
                    avatar={true}
                    title='Me'
                    onClick={logoutOfApp}
                />
            </div>
        </header>
    );
}

export default Header;