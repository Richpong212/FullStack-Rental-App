/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/customerSlice";

const Navbar = () => {
  let publicUrl = process.env.PUBLIC_URL;
  const isLoggedIn = useSelector((state) => state.customer.data.isLoggedIn);

  // useDispatch hook to dispatch logout
  const dispatch = useDispatch();

  // handle logout
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="navbar-area">
        <nav className="navbar navbar-area navbar-expand-lg">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                className="menu toggle-btn d-block d-lg-none"
                data-toggle="collapse"
                data-target="#realdeal_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo readeal-top">
              <Link to="/">
                <img src={publicUrl + "/assets/img/logo.png"} alt="logo" />
              </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <Link className="btn btn-yellow" to="/add-property">
                ADD LISTING{" "}
                <span className="right">
                  <i className="la la-plus" />
                </span>
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="realdeal_main_menu">
              <ul className="navbar-nav menu-open readeal-top">
                <li className=" current-menu-item">
                  <a href="/">Home</a>
                </li>
                <li className="">
                  <a href="/property">Property</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="">{!isLoggedIn ? "Login" : "Profile"}</a>
                  <ul className="sub-menu">
                    {!isLoggedIn && (
                      <>
                        <li>
                          <Link to="/registration">Create an Account</Link>
                        </li>
                        <li>
                          <Link to="/registration">Sign In</Link>
                        </li>
                      </>
                    )}
                    <li onClick={handleLogout}>
                      {isLoggedIn && <Link to="">logout</Link>}
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop readeal-top">
              <Link className="btn btn-yellow" to="/add-property">
                ADD LISTING{" "}
                <span className="right">
                  <i className="la la-plus" />
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
