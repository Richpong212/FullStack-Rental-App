import React from "react";
import "./Footer.scss";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  let publicUrl = process.env.PUBLIC_URL;

  return (
    <div className="globalstyles footer ">
      <div className="container footer-top">
        <div className="footer__logo">
          <a data-testid="nav__logo" className="navbar-brand" href="/">
            <img src={`${publicUrl}/assets/img/footer-logo.png`} alt="logo" />
          </a>
        </div>
        <div className="footer__social">
          <span>FOLLOW US</span>
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
        </div>
      </div>

      {/* footer bottom */}
      <div>
        <div className="container">
          <div className="footer__bottom">
            <div className="column__styles">
              <h4>Hjem</h4>
              <ul>
                <li>
                  <a href="About us">About us</a>
                </li>
                <li>
                  <a href="Blog">Blog</a>
                </li>
                <li>
                  <a href="Cookies">Cookies</a>
                </li>
                <li>
                  <a href="Jobs">Jobs</a>
                </li>
              </ul>
            </div>
            <div className="column__styles">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="Terms and Conditions">Terms & Conditions</a>
                </li>
                <li>
                  <a href="Contact and Help">Contact & Help</a>
                </li>
              </ul>
            </div>
            <div className="column__styles">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="Faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div>{/* Fourth */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
