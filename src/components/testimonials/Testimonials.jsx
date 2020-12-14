import React from 'react';
import './Testimonials.scss';
import testiData from './TestiData';
import QuotesIcon from '../../assets/img/icon-quotes.svg';
import TestiPattern from '../../assets/img/bg-pattern-home-5.svg';

const Testimonials = () => {
    return (
        <section className='testimonials'>
            <div className='container testimonials_container'>
                <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
                <div className='testimonials_persons'>
                    {testiData.map((item) => (
                        <div className='testimonials_person' key={item.key}>
                            <img src={QuotesIcon} alt='myteam quote' />
                            <p>“{item.quote}”</p>
                            <h4>{item.author}</h4>
                            <h5><em>{item.job}</em></h5>
                            <img src={item.authorImg} alt='myteam testi person' className='testimonials_avatar' />
                        </div>
                    ))}
                </div>
                <img src={TestiPattern} alt='myteam Pattern' className='testimonials_pattern' />
            </div>
        </section>
    )
}

export default Testimonials;