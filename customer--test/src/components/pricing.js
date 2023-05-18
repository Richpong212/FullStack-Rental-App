import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PricingSection from './section-components/pricing';
import Footer from './global-components/footer';

const Pricing = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Pricing" />
        <PricingSection />
        <Footer />
    </div>
}

export default Pricing

