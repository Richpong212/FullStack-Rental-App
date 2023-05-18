import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import NewsDetailsSection from './blog-components/news-details';
import Footer from './global-components/footer';

const NewsDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="News Details" />
        <NewsDetailsSection />
        <Footer />
    </div>
}

export default NewsDetails

