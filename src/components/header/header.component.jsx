import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = (currentUser) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img src={logo} alt="" className='logo' />
        </Link>
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