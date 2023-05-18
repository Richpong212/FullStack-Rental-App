/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PropertyDetails = () => {
  const [data, setData] = useState({});
  console.log(data);
  const [
    //contactlandlord,
    setContactLandlord,
  ] = useState(false);
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";
  // get the slug from the url
  const location = useLocation();
  // get the slug from the url
  const slug = location.pathname.split("/")[2];

  // check if the user is logged in
  const isLoggedIn = useSelector((state) => state.customer.data.isLoggedIn);

  // handle contact landlord
  const handleContactLanlord = () => {
    if (isLoggedIn) {
      setContactLandlord(true);
    } else {
      toast.error("please login to contact landlord", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  //API Link
  const api = process.env.REACT_APP_API;

  // get data from the api
  const getData = async () => {
    try {
      const res = await axios.get(`${api}/properties/${slug}`);
      setData(res.data.property);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  // useEffect to get data from the api
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="property-details-area">
      <ToastContainer />
      <div className="bg-gray pd-top-100 pd-bottom-90">
        <div className="container">
          <div className="row ">
            <div className="col-xl-9 col-lg-8">
              <div className="property-details-slider">
                <div className="item">
                  <div className="thumb">
                    <img src={data.images} alt={imagealt} />
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src={data.images} alt={imagealt} />
                  </div>
                </div>
              </div>
              <div className="property-details-slider-info">
                <h3>
                  <span>${data.price}/mo</span> {data.title}
                </h3>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4">
              <div className="widget widget-owner-info mt-lg-0 mt-5">
                <div className="owner-info text-center">
                  <div className="thumb">
                    <PermIdentityIcon />
                  </div>
                  <div className="details">
                    <h6>{data.owner ? data.owner : "John Doe"}</h6>
                    <span className="designation">Building Owner</span>
                    <p className="reviews">
                      <i className="fa fa-star" />
                      <span>{data.rating}</span>
                    </p>
                  </div>
                  {!isLoggedIn ? (
                    <div>
                      <span
                        onClick={handleContactLanlord}
                        className="btn btn-yellow"
                      >
                        Contact Landlord
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                {isLoggedIn && (
                  <>
                    <div className="contact-info">
                      <h6 className="mb-3">Contact Info</h6>
                      <div className="media">
                        <div className="media-left">
                          <img
                            src={publicUrl + "/assets/img/icons/1.png"}
                            alt={imagealt}
                          />
                        </div>
                        <div className="media-body">
                          <p>Address</p>
                          <span>Long Island, NY 11355, USA</span>
                        </div>
                      </div>
                      <div className="media">
                        <div className="media-left">
                          <i className="fa fa-phone" />
                        </div>
                        <div className="media-body">
                          <p>Phone</p>
                          <span>+00 111 222 333</span>
                        </div>
                      </div>
                      <div className="media mb-0">
                        <div className="media-left">
                          <i className="fa fa-envelope" />
                        </div>
                        <div className="media-body">
                          <p>Email</p>
                          <span>info@example.com</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pd-top-90">
          <div className="col-lg-9">
            <div className="property-info mb-5">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="single-property-info">
                    <h5>Bedrooms</h5>
                    <p>
                      <i className="fa fa-bed" />
                      04
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-property-info">
                    <h5>Bathrooms</h5>
                    <p>
                      <i className="fa fa-bath" />
                      02
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-property-info">
                    <h5>Area</h5>
                    <p>
                      <img
                        src={publicUrl + "/assets/img/icons/7.png"}
                        alt={imagealt}
                      />
                      1,038 sq. ft.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-property-info">
                    <h5>Parking</h5>
                    <p>
                      <i className="fa fa-car" />
                      01 Indoor
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="property-news-single-card style-two border-bottom-yellow">
              <h4>Base Floor Plan</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                bibendum elit magna, ut placerat nunc tempus vel. Donec vitae
                dictum ligula. Phasellus congue maximus eleifend. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Suspendisse potenti. Suspendisse sollicitudin
                posuere nunc et vehicula. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Maecenas aliquam vitae quam at
                sodales.{" "}
              </p>
              <a href="#">Read More</a>
            </div>
            {/*
            <div className="property-news-single-card style-two border-bottom-yellow">
              <h4>Base Floor Plan</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5621.1629504770535!2d-122.43633647504856!3d37.748515859182696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1578304196576!5m2!1sen!2sbd"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
             */}
            <div className="property-news-single-card border-bottom-yellow">
              <h4>Amenities</h4>
              <div className="row">
                <div className="col-sm-4">
                  <ul className="rld-list-style mb-3 mb-sm-0">
                    <li>
                      <i className="fa fa-check" /> Attic
                    </li>
                    <li>
                      <i className="fa fa-check" /> Poll
                    </li>
                    <li>
                      <i className="fa fa-check" /> Concierge
                    </li>
                    <li>
                      <i className="fa fa-check" /> Basketball Cout
                    </li>
                    <li>
                      <i className="fa fa-check" /> Sprinklers
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <ul className="rld-list-style mb-3 mb-sm-0">
                    <li>
                      <i className="fa fa-check" /> Recreation
                    </li>
                    <li>
                      <i className="fa fa-check" /> Front Yard
                    </li>
                    <li>
                      <i className="fa fa-check" /> Wine Cellar
                    </li>
                    <li>
                      <i className="fa fa-check" /> Basketball Cout
                    </li>
                    <li>
                      <i className="fa fa-check" /> Fireplace
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <ul className="rld-list-style mb-3 mb-sm-0">
                    <li>
                      <i className="fa fa-check" /> Balcony
                    </li>
                    <li>
                      <i className="fa fa-check" /> Pound
                    </li>
                    <li>
                      <i className="fa fa-check" /> Deck
                    </li>
                    <li>
                      <i className="fa fa-check" /> 24x7 Security
                    </li>
                    <li>
                      <i className="fa fa-check" /> Indoor Game
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="property-news-single-card border-bottom-yellow">
              <h4>Floor Plan</h4>
              <div className="thumb">
                <img
                  src={publicUrl + "/assets/img/others/10.png"}
                  alt={imagealt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
