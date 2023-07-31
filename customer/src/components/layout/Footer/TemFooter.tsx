import React from "react";
import "./Footer.scss";

const TemFooter = () => {
  let publicUrl = process.env.PUBLIC_URL;
  return (
    <div className="tem__container row">
      <div className="tem__logo col">
        <a data-testid="nav__logo" className="navbar-brand" href="/">
          <img src={`${publicUrl}/assets/img/footer-logo.png`} alt="logo" />
        </a>
      </div>
      <div className="tem__info col d-flex gap-2">
        <li>
          <a href="Terms and Conditions">Terms & Conditions</a>
        </li>
        <li>
          <a href="Contact and Help">Contact & Help</a>
        </li>
        <li>
          &copy; {new Date().getFullYear()} Hjem Properties. All Rights Reserved
        </li>
      </div>
    </div>
  );
};

export default TemFooter;
