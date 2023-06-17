import React from "react";
import Slider from "../Sidder/Slider";
import "./propertyDetails.scss";
import ContactForm from "../forms/ContactForm";
import KingBedIcon from "@mui/icons-material/KingBed";
import ShowerIcon from "@mui/icons-material/Shower";
import CropFreeIcon from "@mui/icons-material/CropFree";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import Amenities from "../Amenities/Amenities";

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
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-3 col-md-4 col-sm-12 mt-5">
            <h5>Bedrooms</h5>
            <KingBedIcon className="icon" /> <span>3</span>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 mt-5">
            <h5>Bathrooms</h5>
            <ShowerIcon className="icon" /> <span>2</span>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 mt-5">
            <h5>Area</h5>
            <CropFreeIcon className="icon" /> <span>2000</span>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12  mt-5">
            <h5>Parking</h5>
            <LocalParkingIcon className="icon" /> <span>2</span>s
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <h3>Amenities</h3>
        <div className="row">
          <Amenities />
          <Amenities />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
