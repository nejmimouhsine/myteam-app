import React from 'react';
import './Features.scss';

import featuresData from './FeaturesData';
import HomePattern from '../../assets/img/bg-pattern-home-3.svg';

const Features = () => {
    return (
        <section className='features'>
            <div className='container features_container'>
                <div className='divide_line lightred'></div>
                <div className='features_hero'>
                    <h2>Build & manage distributed teams like no one else.</h2>
                    <div className='features_feats'>
                        {featuresData.map((item) => (
                            <div className='feat' key={item.key}>
                                <div className='feat_icon'>
                                    <img src={item.icon} alt='' />
                                </div>
                                <div className='feat_content'>
                                    <h4>{item.title}</h4>
                                    <p>{item.paragraph}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img src={HomePattern} alt='' className='feat_pattern' />
                </div>
            </div>
        </section>
    )
}

export default Features;