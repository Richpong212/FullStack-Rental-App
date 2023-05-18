import React from "react";
import "./Featured.scss";
import PersonIcon from "@mui/icons-material/Person";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SendIcon from "@mui/icons-material/Send";

const Featured_Property = () => {
  const url =
    "https://thumbs.cityrealty.com/assets/smart/736x/webp/1/16/1655f4e3904fb79cb987ab7755d2b3f4b8f37f88/1-city-point.jpg";

  return (
    <div className="featured__container">
      <div className="featured__title text-center">
        <h1 className="title">Featured Properties</h1>
      </div>
      {/* top of the featured */}
      <div className=" container top__featured ">
        <div className="row gap-2">
          <div className="col-lg-6  ">
            <img src={url} alt="" className="img-fluid top-big__image" />
            <div className="inner__text">
              <h4 className="property__title">Ausbild Apartments</h4>
              <span>$350/mo4 Bed, 3 Beth, Flats. Area 1448-2537 sqft</span>
            </div>
          </div>
          <div className="col-lg ">
            <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                  <img
                    src="https://thumbs.cityrealty.com/assets/smart/1004x/webp/d/d9/d91c65a7e01fe4d9491d9883a76d8a01342db7df/25-west-28th-street-01.jpg"
                    className="card-img-top featured__image"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="d-flex icon__container mb-3">
                      <PersonIcon className="icon" />
                      <span>Landlord</span>
                    </div>
                    <h6 className="card-title mb-3 property__title">
                      Ausbild Apartment
                    </h6>
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
                    <div className="contact__list d-flex gap-2 align-items-center ">
                      <div className="phone">
                        <Link to="">
                          <LocalPhoneIcon className="contact__icon" />
                        </Link>
                      </div>
                      <div className="email">
                        <Link to="">
                          <SendIcon className="contact__icon" />
                        </Link>
                      </div>

                      <button className="card__button">View contact</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <img
                    src="https://thumbs.cityrealty.com/assets/smart/1004x/webp/d/d9/d91c65a7e01fe4d9491d9883a76d8a01342db7df/25-west-28th-street-01.jpg"
                    className="card-img-top featured__image"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="d-flex icon__container mb-3">
                      <PersonIcon className="icon" />
                      <span>Landlord</span>
                    </div>
                    <h6 className="card-title mb-3 property__title">
                      Ausbild Apartment
                    </h6>
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
                    <div className="contact__list d-flex gap-2 align-items-center ">
                      <div className="phone">
                        <Link to="">
                          <LocalPhoneIcon className="contact__icon" />
                        </Link>
                      </div>
                      <div className="email">
                        <Link to="">
                          <SendIcon className="contact__icon" />
                        </Link>
                      </div>

                      <button className="card__button">View contact</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End top of the featured */}
    </div>
  );
};

export default Featured_Property;
