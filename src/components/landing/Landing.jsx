import React from 'react';
import './Landing.scss';

import LandPatter from '../../assets/img/bg-pattern-home-1.svg';
import LandPatterLeft from '../../assets/img/bg-pattern-home-2.svg';

const Landing = () => {
    return (
        <section className='landing'>
            <div className='container landing_container'>
                <div className='landing_hero'>
                    <h1>Find the best <span>talent</span></h1>
                </div>
                <div className='landing_feature'>
                    <div className='divide_line'></div>
                    <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                </div>
                <img src={LandPatter} alt='MyTeam Pattern' className='landing_pattern' />
                <img src={LandPatterLeft} alt='MyTeam Pattern' className='landing_patternleft' />
            </div>
        </section>
    )
}

export default Landing
