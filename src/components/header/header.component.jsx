import React from 'react';

import logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = (currentUser) => (
    <div className='header'>
        {/* <Logo /> */}
        <div className='logo-container'>
            <img src={logo} alt="" className='logo' />
        </div>
        <div className='options'>
            { currentUser ? (
                <div>
                    <div className='option'>Twoje zamówienia</div>
                    <div className='option'>Wyloguj</div>
                </div>
            ) : (
                <div>
                    <div className='option'>Zaloguj</div>
                    <div className='option'>Zarejestruj</div>
                </div>
                
            )}
        </div>
    </div>
);

export default Header;