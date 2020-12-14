import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header_nav'>
                    <h3>myteam</h3>
                    <ul>
                        <li><Link className='header_link' to='/'>home</Link></li>
                        <li><Link className='header_link' to='/about'>about</Link></li>
                    </ul>
                </div>
                <div className='header_btn'>
                    <Button className='btn btn_white' />
                </div>
            </div>
        </header>
    )
}

export default Header;