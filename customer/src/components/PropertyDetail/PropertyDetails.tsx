import React from "react";
import Slider from "../Sidder/Slider";
import "./propertyDetails.scss";
import ContactForm from "../forms/ContactForm";

const PropertyDetails = () => {
  return (
    <div>
      <div className="property__details">
        {/* Container for property details */}
        <div className="container mt-5">
          {/* Row to display content side by side */}
          <div className="row">
            {/* Column for the slider component */}
            <div className="col-lg-8">
              <Slider />
            </div>
            {/* Column for additional details */}
            <div className="col-lg-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
