import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PropertySection from './section-components/properties-by-city';
import TopAuthor from './section-components/top-author';
import Footer from './global-components/footer';

const AvailableProperty = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Properties by Cities"/>
        <PropertySection />
        <TopAuthor />
        <Footer />
    </div>
}

export default AvailableProperty

