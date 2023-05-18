import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import SearchGridSection from './section-components/search-grid';
import Footer from './global-components/footer';

const SearchGrid = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Apartment for rent in Gulshan" subheader="Apartment rent" />
        <SearchGridSection />
        <Footer />
    </div>
}

export default SearchGrid

