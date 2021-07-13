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

function Header() {
    return (
        <header className='header'>
            <div className="header__left">
                <img src={linkedin} alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={House} title='Home' />
                <HeaderOption Icon={SupervisorAccount} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar='https://media-exp3.licdn.com/dms/image/C5603AQHzejeiXmcJBQ/profile-displayphoto-shrink_100_100/0/1622889555069?e=1631750400&v=beta&t=h6nxvgbv989iDfdUi3c-5VTYotwAV9TEyIeUz1hn-Qc' title='Me' />
            </div>
        </header>
    );
}

export default Header;