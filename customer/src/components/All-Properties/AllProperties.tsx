import React from "react";
import PropertyCard from "../property-card/PropertyCard";

const AllProperties = () => {
  return (
    <div
      className="container "
      style={{
        padding: "0 5rem",
      }}
    >
      <div className="row ">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <PropertyCard />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <PropertyCard />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <PropertyCard />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <PropertyCard />
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
