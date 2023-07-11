import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SingleProperty from "../../components/single-PropertyCard/SingleProperty";

interface Property {
  location: string;
}

const SearchResults = () => {
  const location = useLocation();

  // Get the filtered properties from the location state
  const filteredProperties = location.state;

  return (
    <div className="mt-5 ms-5 me-5">
      <h1>Search Results</h1>
      {filteredProperties.map((property: any) => (
        // Display the properties card here
        <SingleProperty property={property} />
      ))}
    </div>
  );
};

export default SearchResults;
