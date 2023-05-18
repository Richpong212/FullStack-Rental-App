import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import TopAuthor from "./section-components/top-author";
import Footer from "./global-components/footer";
import Properties from "./properties/Properties";

const Property = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Property" />
      <Properties />
      <TopAuthor />
      <Footer />
    </div>
  );
};

export default Property;
