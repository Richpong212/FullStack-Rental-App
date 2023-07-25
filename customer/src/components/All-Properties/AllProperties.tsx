import React, { useEffect, useState } from "react";
import PropertyCard from "../property-card/PropertyCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperty } from "../../service/property.service";
import Loading from "../lottie-animations/Loading";

interface AllPropertiesProps {
  itemsPerPage: number;
}

const AllProperties: React.FC<AllPropertiesProps> = ({ itemsPerPage }) => {
  // Dispatch action to get all properties
  const dispatch = useDispatch();

  // useEffect to get all properties
  useEffect(() => {
    // Dispatch action to get all properties
    getAllProperty(dispatch);
  }, [dispatch]);

  // Get all properties from the Redux store
  const properties = useSelector((state: any) => state.properties.properties);

  // State to manage current page
  const [currentPage, setCurrentPage] = useState(1);

  // Get the total number of pages
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  // Get properties for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const propertiesForPage = properties.slice(startIndex, endIndex);

  // Handle pagination
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container" style={{ padding: "0 5rem" }}>
      <div className="row">
        <div className="col">
          <h2 className="section-title">Featured Properties</h2>
        </div>
      </div>
      <div className="row">
        {propertiesForPage.length > 0 ? (
          propertiesForPage.map((property: any, key: number) => (
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
      {properties.length > itemsPerPage && (
        <div className="row mt-4">
          <div className="col text-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`btn globalbuttonstyles ${
                  index + 1 === currentPage ? "active" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProperties;
