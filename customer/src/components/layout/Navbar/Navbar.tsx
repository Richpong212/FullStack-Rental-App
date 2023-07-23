import React from "react";
import "./NavbarStyles.scss";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/Slice/customerSlice";
import { toast, ToastContainer } from "react-toastify";

const NavigationBar = () => {
  let publicUrl = process.env.PUBLIC_URL;

  //is logged in from redux
  const isLoggedin = useSelector(
    (state: any) => state.customer.data.isLoggedIn
  );

  // dispatch and navigate
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle logout
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };

  // handle create property
  const handleCreate = () => {
    if (isLoggedin) {
      navigate("/create-property");
    } else {
      toast("Please login to add property", {
        type: "error",
        position: "top-right",
        pauseOnHover: false,
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: true,
        //hide the shadow of the toast
        style: {
          boxShadow: "none",
        },
      });
    }
  };

  return (
    <nav className="globalstyles navbar navbar-expand-lg bg-body-tertiary">
      <ToastContainer />
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={`${publicUrl}/assets/img/logo.png`} alt="logo" />
        </Link>

        <div className="d-flex align-items-center">
          <button onClick={handleCreate} className="btn mobile-navbutton">
            Add Property <AddIcon />
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/properties" className="nav-link">
                Properties
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </span>
              <ul className="dropdown-menu">
                {!isLoggedin ? (
                  <>
                    <li>
                      <Link to="/login" className="dropdown-item">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="dropdown-item">
                        Register
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={handleLogOut}
                      className="dropdown-item"
                    >
                      Logout
                    </span>
                  </li>
                )}
              </ul>
            </li>
          </ul>
          <button
            onClick={handleCreate}
            className="btn desktop-navbutton"
            type="submit"
          >
            Add Property <AddIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
