import React, { Fragment } from 'react';

import Landing from '../components/landing/Landing';
import Features from '../components/features/Features';
import Testimonials from '../components/testimonials/Testimonials';
import ContactComp from '../components/contact/Contact';

const Homepage = () => {
    return (
        <Fragment>
            <Landing />
            <Features />
            <Testimonials />
            <ContactComp />
        </Fragment>
    )
}

export default Homepage;
