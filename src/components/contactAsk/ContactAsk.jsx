import React from 'react';
import './ContactAsk.scss';

import PersonIcon from '../../assets/img/icon-person.svg';
import CogIcon from '../../assets/img/icon-cog.svg';
import ChartIcon from '../../assets/img/icon-chart.svg';

const ContactAsk = () => {
    return (
        <div className='contactAsk'>
            <h2>Contact</h2>
            <h3>Ask us about</h3>
            <div className='contactAsk_features'>
                <div className='contactAsk_feat'>
                    <img src={PersonIcon} alt='' />
                    <h4>The quality of our talent network</h4>
                </div>
                <div className='contactAsk_feat'>
                    <img src={CogIcon} alt='' />
                    <h4>Usage & implementation of our software</h4>
                </div>
                <div className='contactAsk_feat'>
                    <img src={ChartIcon} alt='' />
                    <h4>How we help drive innovation</h4>
                </div>
            </div>
        </div>
    )
}

export default ContactAsk;