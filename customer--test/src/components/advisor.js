import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Mission from './section-components/mission-two';
import Professional from './section-components/professional';
import SellHome from './section-components/sellhome';
import Process from './section-components/process';
import BuyOrSell from './section-components/buy-or-sell';
import Footer from './global-components/footer';

const Advisor = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="We are Real Estate Advisors" subheader="Advisors" />
        <Mission />
        <Professional />
        <SellHome />
        <Process />
        <BuyOrSell />
        <Footer />
    </div>
}

export default Advisor

