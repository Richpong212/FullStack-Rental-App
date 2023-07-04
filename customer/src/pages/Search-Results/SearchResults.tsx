import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Property {
  location: string;
}

const SearchResults = () => {
  const location = useLocation();

  // Get the filtered properties from the location state
  const filteredProperties = location.state;

  return (
    <div>
      <h1>Search Results</h1>
      {filteredProperties.map((property: Property) => (
        // Display the properties card here
        <h1></h1>
      ))}
    </div>
  );
};

export default SearchResults;
