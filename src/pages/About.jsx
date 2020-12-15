import React, { Fragment } from 'react';
import AboutLanding from '../components/about_landing/AboutLanding';
import Cards from '../components/cards/Cards';
import Clients from '../components/clients/Clients';
import ContactComp from '../components/contact/Contact';

const About = () => {
    return (
        <Fragment>
            <AboutLanding />
            <Cards />
            <Clients />
            <ContactComp />
        </Fragment>
    )
}

export default About;
