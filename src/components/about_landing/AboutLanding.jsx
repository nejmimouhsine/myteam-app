import React from 'react';
import '../landing/Landing.scss';
import './AboutLanding.scss';

import AboutPattern from '../../assets/img/bg-pattern-about-1-mobile-nav-1.svg';

const AboutLanding = () => {
    return (
        <section className='landing about'>
            <div className='container landing_container'>
                <div className='landing_hero about_hero'>
                    <h2>About</h2>
                </div>
                <div className='landing_feature about_feature'>
                    <div className='divide_line lightred'></div>
                    <p>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
                </div>
                <img src={AboutPattern} alt='MyTeam Pattern' className='about_pattern' />
            </div>
        </section>
    )
}

export default AboutLanding;