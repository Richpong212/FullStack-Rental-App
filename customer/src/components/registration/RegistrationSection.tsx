import React, { useState, ChangeEvent } from "react";
import "./RegistrationSection.scss";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginField from "./LoginField";
import RegisterField from "./RegisterField";

// design for login form

const RegistrationSection = () => {
  return (
    <div data-testid={"registrationsection"} className="globalmainstyles ">
      <ToastContainer />
      <div className="container registration">
        <div className="row justify-content-center row__items">
          {/* login on the left side */}
          <div className="col-xl-4 col-lg-5 col-md-6 mb-5 mb-md-0">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title text-left mb-4">Login</h5>
                <div className="form-group">
                  <LoginField />
                </div>
              </div>
            </div>
          </div>
          {/* register on the right side */}
          <div className="col-xl-4 col-lg-5 col-md-6 mb-5 mb-md-0 register">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title text-left mb-4">Create an Account</h5>
                <div className="form-group">
                  <RegisterField />
                </div>
              </div>
              {/* display 3 social icons */}
              <div className="social__container d-flex">
                <span className="ml-0">
                  <a href="#" target="_blank">
                    <FaFacebookF className="social__icon" />
                  </a>
                </span>
                <span>
                  <a href="#" target="_blank">
                    <FaTwitter className="social__icon" />
                  </a>
                </span>
              </div>
              {/* End of social icons */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSection;
