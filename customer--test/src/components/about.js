import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Mission from './section-components/mission';
import AboutUs from './section-components/about-us';
import ServiceTwo from './section-components/service-two';
import Team from './section-components/team';
import Client from './section-components/client';
import Footer from './global-components/footer';

const About = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About" />
        <Mission />
        <AboutUs />
        <ServiceTwo />
        <Team />
        <Client />
        <Footer />
    </div>
}

export default About

