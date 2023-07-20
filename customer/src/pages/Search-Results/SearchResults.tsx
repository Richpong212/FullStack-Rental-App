import React, { useEffect, useState } from "react";
import "./Search.scss";
import { useLocation } from "react-router-dom";
import SingleProperty from "../../components/single-PropertyCard/SingleProperty";

interface Property {
  location: string;
}

const SearchResults = () => {
  const location = useLocation();

  // Get the filtered properties from the location state
  const filteredProperties = location.state;

  // Function to group properties in chunks of four
  const groupPropertiesInRows = (properties: any[]) => {
    const rows: any[][] = [];
    for (let i = 0; i < properties.length; i += 4) {
      rows.push(properties.slice(i, i + 4));
    }
    return rows;
  };

  const groupedProperties = groupPropertiesInRows(filteredProperties);

  return (
    <div className=" ms-5 me-5 search">
      <h1>Search Results</h1>
      {groupedProperties.map((row: any[], index: number) => (
        // Display each row containing four properties
        <div className="row" key={index}>
          {row.map((property: any) => (
            <div className="col-md-3" key={property.slug}>
              <SingleProperty property={property} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
