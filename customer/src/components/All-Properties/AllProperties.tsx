import React, { useEffect } from "react";
import PropertyCard from "../property-card/PropertyCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperty } from "../../service/property.service";

const AllProperties = () => {
  // dispatch action to get all properties
  const dispatch = useDispatch();

  // useEffect to get all properties
  useEffect(() => {
    // dispatch action to get all properties
    getAllProperty(dispatch);
  }, [dispatch]);

  // get all properties
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
          // check if properties is not empty
          properties.length > 0 ? (
            properties.map((property: any) => (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <PropertyCard key={property._id} property={property} />
              </div>
            ))
          ) : (
            <h1>No Properties Found</h1>
          )
        }
      </div>
    </div>
  );
};

export default AllProperties;
