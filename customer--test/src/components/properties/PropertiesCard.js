/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import ApartmentIcon from "@mui/icons-material/Apartment";

const PropertiesCard = ({ property }) => {
  let publicUrl = process.env.PUBLIC_URL;

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
      <div className="single-feature">
        <div className="thumb">
          <img src={property.images[0]} alt={"property-img"} />
        </div>
        <div className="details">
          <a href="#" className="feature-logo">
            <ApartmentIcon />
          </a>
          <p className="author">
            <i className="fa fa-user" /> {property.owner}
          </p>
          <h6 className="title readeal-top">
            <Link to={`/property-details/${property.slug}`}>
              {property.title}
            </Link>
          </h6>
          <h6 className="price">$ {property.price}/mo</h6>
          <ul className="info-list">
            <li>
              <img src={publicUrl + "/assets/img/icons/7.png"} alt="img" />{" "}
              {property.location}
            </li>
          </ul>
          <ul className="contact-list">
            <li>
              <a className="phone" href="">
                <i className="fa fa-phone" />
              </a>
            </li>
            <li>
              <a className="message" href="">
                <img src={publicUrl + "/assets/img/icons/8.png"} alt="img" />
              </a>
            </li>
            <li className="readeal-top">
              <Link
                className="btn btn-yellow"
                to={`/property-details/${property.slug}`}
              >
                View Details
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
