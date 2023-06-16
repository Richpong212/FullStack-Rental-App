import React from "react";
import SinglePropertyHeader from "../../components/headers/SinglePropertyHeader/SinglePropertyHeader";
import PropertyDetails from "../../components/PropertyDetail/PropertyDetails";

const Property = () => {
  return (
    <>
      {/* Render the SinglePropertyHeader component */}
      <SinglePropertyHeader />

      {/* Render the PropertyDetails component */}
      <PropertyDetails />
    </>
  );
};

export default Property;
