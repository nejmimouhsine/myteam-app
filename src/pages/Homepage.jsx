import React, { Fragment } from 'react';

import Landing from '../components/landing/Landing';
import Features from '../components/features/Features';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';

const Homepage = () => {
    return (
        <Fragment>
            <Landing />
            <Features />
            <Testimonials />
            <Contact />
        </Fragment>
    )
}

export default Homepage;
