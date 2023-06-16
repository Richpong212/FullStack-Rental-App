import React, { useEffect } from "react";
import PropertyCard from "../property-card/PropertyCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperty } from "../../service/property.service";

const AllProperties = () => {
  // Dispatch action to get all properties
  const dispatch = useDispatch();

  // useEffect to get all properties
  useEffect(() => {
    // Dispatch action to get all properties
    getAllProperty(dispatch);
  }, [dispatch]);

  // Get all properties from the Redux store
  const properties = useSelector((state: any) => state.properties.properties);

  return (
    <div
      className="container "
      style={{
        padding: "0 5rem",
      }}
    >
      <div className="row ">
        {
          // Check if properties array is not empty
          properties.length > 0 ? (
            // Render each property using the PropertyCard component
            properties.map((property: any) => (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <PropertyCard key={property._id} property={property} />
              </div>
            ))
          ) : (
            // Display "No Properties Found" if properties array is empty
            <h1>No Properties Found</h1>
          )
        }
      </div>
    </div>
  );
};

export default AllProperties;
