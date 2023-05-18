import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PropertySection from './section-components/available-peroperty';
import Footer from './global-components/footer';

const AvailableProperty = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Availavbe Apartments" subheader="Availavbe" />
        <PropertySection />
        <Footer />
    </div>
}

export default AvailableProperty

