import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useLocation } from "react-router";
import { getSingleProperty } from "../../service/property.service";

const ContactForm = () => {
  // state to hold the property
  const [property, setProperty] = useState<any>({}); // background image

  console.log(property);

  // get location from url
  const location = useLocation();

  // get the id from the url
  const path = location.pathname.split("/")[2];

  // useEffect to get the property by slug
  useEffect(() => {
    // function to fetch the property by slug
    const getProperty = async () => {
      const property = await getSingleProperty(path);
      setProperty(property.property);
    };

    // call the function to fetch the property
    getProperty();
  }, [path]);

  return (
    <div>
      <div className="card mt-2">
        <div className="card-body">
          <h5 className="card-title">Contact Agent</h5>
          <hr />
          {/* Address */}
          <div className="d-flex mb-4 gap-2">
            <div className="form__icon">
              <LocationOnIcon className="icon" />
            </div>
            <div>
              <p className="card-text">Address</p>
              <span className="card-text">{property.location}</span>
            </div>
          </div>
          {/* Phone */}
          <div className="d-flex mb-4 gap-2">
            <div className="form__icon">
              <PhoneIcon className="icon" />
            </div>
            <div>
              <p className="card-text">Phone</p>
              <p className="card-text">{property.phone}</p>
            </div>
          </div>
          {/* Email */}
          <div className="d-flex mb-4 gap-2">
            <div className="form__icon">
              {
                //<EmailIcon className="icon" />
              }
            </div>
            <div>
              {/*
                <p className="card-text">Email</p>
              <p className="card-text">richpong123@gmail.com</p>
                 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
