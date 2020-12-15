import React from 'react';
import ContactAsk from '../components/contactAsk/ContactAsk';
import Form from '../components/form/Form';

import ContactPattern from '../assets/img/bg-pattern-about-2-contact-1.svg';
import ContactPatternLeft from '../assets/img/bg-pattern-contact-2.svg';

const Contact = () => {
    return (
        <section className='contactpage'>
            <div className='container contactpage_container'>
                <ContactAsk />
                <Form />
            </div>
            <img src={ContactPattern} alt='myteam pattern' className='contactpage_patternleft' />
            <img src={ContactPatternLeft} alt='myteam pattern' className='contactpage_pattern' />
        </section>
    )
}

export default Contact;
