import React from "react";
import "./SearchBar.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SearchBar = () => {
  return (
    <div className="">
      <div d-flex col-md-6>
        <button className="globalbuttonstyles">For Rent</button>
      </div>
      <div className="search__container container col-lg-6">
        <div className="row gap-3 ">
          <div className="col-md-3">
            <div className="input-group flex-nowrap">
              <span
                className="input-group-text input__icon"
                id="addon-wrapping"
              >
                <LocationOnIcon />
              </span>
              <input
                type="text"
                className="form-control search__input"
                placeholder="Search by location"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="row middle_item">
              <div className="col-md-4">
                <select
                  className="form-select mb-3"
                  aria-label="All Properties"
                >
                  <option selected>All Properties</option>
                  <option value="1">One</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select mb-3" aria-label="Room">
                  <option selected>Room</option>
                  <option value="1">One</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select mb-3" aria-label="Price">
                  <option selected>Price</option>
                  <option value="1">One</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <span>
              <button className="btn search__now globalbuttonstyles ">
                Search Now
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
