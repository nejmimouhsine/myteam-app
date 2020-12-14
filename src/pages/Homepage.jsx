import React, { Fragment } from 'react';

import Landing from '../components/landing/Landing';
import Features from '../components/features/Features';
import Testimonials from '../components/testimonials/Testimonials';

const Homepage = () => {
    return (
        <Fragment>
            <Landing />
            <Features />
            <Testimonials />
        </Fragment>
    )
}

export default Homepage;
