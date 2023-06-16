import React, { useEffect, useState } from "react";
import "./slider.scss";
import { useLocation } from "react-router";
import { getSingleProperty } from "../../service/property.service";

const Slider = () => {
  const [property, setProperty] = useState<any>({}); // state to hold the property

  console.log(property);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getProperty = async () => {
      const property = await getSingleProperty(path);
      setProperty(property.property);
    };

    getProperty();
  }, [path]);

  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {/* Iterate over property.images array and render each image */}
          {property.images &&
            property.images.map((image: string, index: number) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt="propertyimage"
                />
              </div>
            ))}
        </div>
        {/* Previous Button */}
        <button
          className="carousel-control-prev carousel__btn"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        {/* Next Button */}
        <button
          className="carousel-control-next carousel__btnleft"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
