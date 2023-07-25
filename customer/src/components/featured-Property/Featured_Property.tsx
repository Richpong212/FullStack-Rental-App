import React, { useEffect } from "react";
import "./Featured.scss";
import PropertyCard from "../property-card/PropertyCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperty } from "../../service/property.service";
import Loading from "../lottie-animations/Loading";

interface FeaturedPropertyProps {
  limit: number;
}

const FeaturedProperty: React.FC<FeaturedPropertyProps> = ({ limit }) => {
  // Dispatch action to get all properties
  const dispatch = useDispatch();

  // useEffect to get all properties
  useEffect(() => {
    // Dispatch action to get all properties
    getAllProperty(dispatch);
  }, [dispatch]);

  // Get all properties from the Redux store
  const properties = useSelector((state: any) => state.properties.properties);

  // Limit the number of properties to display
  const limitedProperties = properties.slice(0, limit);

  // URL to All Properties page
  const allPropertiesUrl = "/properties";

  return (
    <div className="featured__container">
      <div className="featured__title text-center">
        <h1 className="title">Featured Properties</h1>
      </div>
      <div className="container" style={{ padding: "0 5rem" }}>
        <div className="row">
          <div className="col">
            <h2 className="section-title">Featured Properties</h2>
          </div>
        </div>
        <div className="row">
          {limitedProperties.length > 0 ? (
            limitedProperties.map((property: any, key: number) => (
              <div key={property._id} className="col-lg-4 col-md-6 col-sm-12">
                <PropertyCard property={property} />
              </div>
            ))
          ) : (
            <div className="col">
              <Loading />
            </div>
          )}
        </div>
        {properties.length > limit && (
          <div className="row mt-4">
            <div className="col text-center">
              {/* Button to go to All Properties */}
              <a href={allPropertiesUrl} className="btn globalbuttonstyles">
                View All Properties
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProperty;
