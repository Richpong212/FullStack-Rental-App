import React from "react";
import "./PropertyCard.scss";
import PersonIcon from "@mui/icons-material/Person";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ToastContainer, toast } from "react-toastify";

interface PropertyCardProps {
  property: {
    slug: string;
    images: string[];
    title: string;
    price: number;
    bedroom: number;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  // Get the 'isLoggedIn' state from the customer slice using Redux useSelector hook
  const isLoggedin = useSelector(
    (state: RootState) => state.customer.data.isLoggedIn
  );

  // handleClick function
  const handleClick = () => {
    if (!isLoggedin) {
      toast.error("Please login to view contact details", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  };

  return (
    <div className="card mb-3 mt-5">
      <ToastContainer />
      <Link to={`/property/${property.slug}`}>
        <img
          src={property.images[0]}
          className="img-fluid property__image"
          alt={property.slug}
        />
      </Link>
      <div className="card-body">
        {/* Display the landlord information */}
        <div className="d-flex icon__container mb-3">
          <PersonIcon className="icon" />
          <span>Landlord</span>
        </div>
        {/* Display the property title */}
        <h6 className="card-title mb-3 property__title">{property.title}</h6>
        {/* Display the property price */}
        <div className="card-text mb-3">
          <span>${property.price}/mo</span>
        </div>
        {/* Display property features */}
        <div className="d-flex gap-3 featured__bottom">
          <div className="d-flex gap-1 featured__icon">
            <BedIcon className="icon__bottom" />
            <span>{property.bedroom} Bed</span>
          </div>
          <div className="d-flex gap-1 featured__icon">
            <ShowerIcon className="icon__bottom" />
            <span>3 Bath</span>
          </div>
          <div className="d-flex gap-1 featured__icon">
            <CropFreeIcon className="icon__bottom" />
            <span>290 sq.</span>
          </div>
        </div>
        {/* Display contact options */}
        <div className="property__contact d-flex gap-2 align-items-center">
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
          {/* Button to view contact details */}
          <Link onClick={handleClick} to={`/property/${property.slug}`}>
            <button className="card__button">View Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
