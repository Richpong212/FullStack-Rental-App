import React from "react";
import Navbar from "./global-components/navbar";
import PropertyDetailsSection from "./section-components/property-details";
import RecomandProperties from "./section-components/recomand-properties";
import Footer from "./global-components/footer";
import PropertyHeader from "./property-details/PropertyHeader";

const PropertyDetails = () => {
  return (
    <div>
      <Navbar />
      <PropertyHeader headertitle="Property Details" />
      <PropertyDetailsSection />
      <RecomandProperties />
      <Footer />
    </div>
  );
};

export default PropertyDetails;
