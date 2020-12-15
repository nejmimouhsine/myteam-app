import React from 'react';
import './Clients.scss';

import TheVerge from '../../assets/img/logo-the-verge.png';
import TheJakartaPost from '../../assets/img/logo-jakarta-post.png';
import TheGuardian from '../../assets/img/logo-the-guardian.png';
import TechRadar from '../../assets/img/logo-tech-radar.png';
import GadgetsNow from '../../assets/img/logo-gadgets-now.png';

import ClientsPattern from '../../assets/img/bg-pattern-about-4.svg';

const Clients = () => {
    return (
        <section className='clients'>
            <div className='container clients_container'>
                <h2>Some of our clients</h2>
                <div className='clients_imgs'>
                    <img src={TheVerge} alt='myteam clients' />
                    <img src={TheJakartaPost} alt='myteam clients' />
                    <img src={TheGuardian} alt='myteam clients' />
                    <img src={TechRadar} alt='myteam clients' />
                    <img src={GadgetsNow} alt='myteam clients' />
                </div>
            </div>
            <img src={ClientsPattern} alt='myteam pattern' className='clients_pattern' />
        </section>
    )
}

export default Clients;