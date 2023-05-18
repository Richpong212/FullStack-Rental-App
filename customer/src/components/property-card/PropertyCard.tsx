import React from "react";
import "./PropertyCard.scss";
import PersonIcon from "@mui/icons-material/Person";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SendIcon from "@mui/icons-material/Send";

const PropertyCard = () => {
  const url =
    "https://thumbs.cityrealty.com/assets/smart/736x/webp/1/16/1655f4e3904fb79cb987ab7755d2b3f4b8f37f88/1-city-point.jpg";
  return (
    <div className="card mb-3 mt-5 ">
      <img
        src="https://thumbs.cityrealty.com/assets/smart/1004x/webp/d/d9/d91c65a7e01fe4d9491d9883a76d8a01342db7df/25-west-28th-street-01.jpg"
        className="img-fluid property__image"
        alt="..."
      />
      <div className="card-body">
        <div className="d-flex icon__container mb-3">
          <PersonIcon className="icon" />
          <span>Landlord</span>
        </div>
        <h6 className="card-title mb-3 property__title">Ausbild Apartment</h6>
        <div className="card-text mb-3">
          <span>$350/mo</span>
        </div>
        <div className="d-flex gap-3 featured__bottom ">
          <div className="d-flex gap-1 featured__icon">
            <BedIcon className="icon__bottom" />
            <span>4 Bed</span>
          </div>
          <div className="d-flex gap-1 featured__icon">
            <ShowerIcon className="icon__bottom" />
            <span>3 bath</span>
          </div>
          <div className="d-flex gap-1 featured__icon">
            <CropFreeIcon className="icon__bottom" />
            <span>290 sq.</span>
          </div>
        </div>
        <div className="property__contact d-flex gap-2 align-items-center ">
          <div className="property_phone">
            <Link to="">
              <LocalPhoneIcon className="contact__icon" />
            </Link>
          </div>
          <div className="property_email">
            <Link to="">
              <SendIcon className="contact__icon" />
            </Link>
          </div>

          <button className="card__button">View contact</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
