import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import linkedin from '../../images/svg/linkedin.svg';

function Header() {
    return (
        <header className='header'>
            <div className="header__left">
                <img src={linkedin} alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">

            </div>
        </header>
    );
}

export default Header;