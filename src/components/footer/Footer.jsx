import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.svg';
import FacebookIcon from '../../assets/img/icon-facebook.svg';
import PinterestIcon from '../../assets/img/icon-pinterest.svg';
import TwitterIcon from '../../assets/img/icon-twitter.svg';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    
    return (
        <footer className='footer'>
            <div className='container footer_container'>
                <div className='footer_left'>
                    <img src={Logo} alt='myteam logo' className='footer_logo' />
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/about'>about</Link></li>
                    </ul>
                    <div className='footer_social'>
                        <img src={FacebookIcon} alt='myteam facebook' />
                        <img src={PinterestIcon} alt='myteam pinterest' />
                        <img src={TwitterIcon} alt='myteam twitter' />
                    </div>
                </div>
                <div className='footer_right'>
                    <div className='footer_location'>
                        <p>987 Hillcrest Lane</p>
                        <p>Irvine, CA</p>
                        <p>California 92714</p>
                        <p>Call us: 949-833-7432</p>
                    </div>
                    <div className='footer_copy'>
                        <p>Copyright {year}. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;