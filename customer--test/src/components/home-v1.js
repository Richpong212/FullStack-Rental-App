import React from "react";
import Navbar from "./global-components/navbar";
import Banner from "./section-components/banner";
import Service from "./section-components/service";
//import Explore from "./section-components/explore";
import FeaturedProperties from "./section-components/featured-properties";
import Ads from "./section-components/ads";
import WhyChooseUs from "./section-components/why-choose-us";
//import OurPartner from "./section-components/our-partner";
import Footer from "./global-components/footer";

const Home_V1 = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Service />
      {/*<Explore />*/}
      <FeaturedProperties />
      <Ads />
      <WhyChooseUs />
      {/*<OurPartner />*/}
      <Footer />
    </div>
  );
};

export default Home_V1;
