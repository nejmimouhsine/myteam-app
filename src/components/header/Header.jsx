import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import './Header.scss';

import logo from '../../assets/img/logo.svg';
import headerToggle from '../../assets/img/icon-hamburger.svg';
import headerClose from '../../assets/img/icon-close.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

    return (
        <header className='header'>
            <div className='container header_container'>
                <div className='header_logo'>
                    <Link to='/'>
                        <img src={logo} alt='myteam logo' />
                    </Link>
                </div>
                <div className='header_nav'>
                    <ul>
                        <li><Link className='header_link' to='/'>home</Link></li>
                        <li><Link className='header_link' to='/about'>about</Link></li>
                    </ul>
                </div>
                <div className='header_btn'>
                    <Button className='btn btn_white' />
                </div>
                <div className='header_toggle'>
                    <img src={ !toggle ? headerToggle : headerClose } className={toggle ? 'header_menu' : null} alt='myteam toggle' onClick={handleToggle} />
                </div>
            </div>
            <nav className={ toggle ? 'header_aside active' : 'header_aside' }>
                <ul>
                    <li><Link className='header_link' to='/'>home</Link></li>
                    <li><Link className='header_link' to='/about'>about</Link></li>
                </ul>
                <Button className='btn btn_white' />
            </nav>
        </header>
    )
}

export default Header;