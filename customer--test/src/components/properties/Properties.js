import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProperty } from "../../service/propertyService";
import { useDispatch, useSelector } from "react-redux";
import PropertiesCard from "./PropertiesCard";

const Properties = () => {
  // dispatch
  const dispatch = useDispatch();

  // get properties
  useEffect(() => {
    getAllProperty(dispatch);
  }, [dispatch]);

  // get the properties data from redux
  const properties = useSelector((state) => state.property.properties);

  let imagealt = "image";

  return (
    <div className={"featured-area"}>
      <div className="container">
        <div style={{ marginTop: "20px" }} className="row custom-gutter">
          <div className="col-lg-12">
            <div className="property-filter-menu-wrap">
              <div className="property-filter-menu portfolio-filter text-center">
                <button data-filter="*" className="active">
                  All Properties
                </button>
                <button data-filter=".cat1">Top Properties</button>
                <button data-filter=".cat2">Biggest Home</button>
                <button data-filter=".cat3">High Demand</button>
                <button data-filter=".cat4">Verified Home</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            {properties.slice(0, 1).map((item) => (
              <div key={item._id} className="single-leading-feature">
                <div className="slf-overlay" />
                <div className="thumb">
                  <img src={item.images} alt={imagealt} />
                </div>
                <div className="details">
                  <h4 className="title readeal-top">
                    <Link to={`/property-details/${properties.slug}`}>
                      {item.title}
                    </Link>
                  </h4>
                  <h5 className="price">$ {item.price}/mo</h5>
                  <span>{""}</span>
                </div>
              </div>
            ))}
          </div>
          {/*component*/}
          {properties.map((property) => (
            <PropertiesCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
