import React, { useEffect, useState } from "react";
import sectiondata from "../../data/sections.json";
import { Link } from "react-router-dom";
import { getAllProperty } from "../../service/propertyService";
import { useDispatch, useSelector } from "react-redux";
import FeaturedProperty from "../featuredProperty/FeaturedProperty";

const Featured = () => {
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
        <div className="section-title text-center">
          <h2 className="title">Featured properties</h2>
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
                    <Link to={`/property-details/${item.slug}`}>
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
            <FeaturedProperty key={property._id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
