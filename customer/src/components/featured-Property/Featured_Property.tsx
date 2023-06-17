import React from "react";
import "./Featured.scss";
import PersonIcon from "@mui/icons-material/Person";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { Link, NavLink } from "react-router-dom";
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
    </div>
  );
};

export default Featured_Property;
