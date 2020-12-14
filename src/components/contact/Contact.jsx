import React from 'react';
import './Contact.scss';
import ContactPattern from '../../assets/img/bg-pattern-home-6-about-5.svg';
import Button from '../button/Button';

const ContactComp = () => {
    return (
        <section className='contact'>
            <div className='container contact_container'>
                <h2>Ready to get started?</h2>
                <Button className='btn btn_green' />
            </div>
            <img src={ContactPattern} alt='Contact Pattern' className='contact_pattern' />
        </section>
    )
}

export default ContactComp;