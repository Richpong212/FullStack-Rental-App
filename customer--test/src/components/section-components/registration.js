import React, { useState } from "react";
import { login } from "../../redux/features/customerSlice";
import { useDispatch } from "react-redux";
import { loginCustomer } from "../../service/customerService";

const Registration = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  // dispatch the action
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginCustomer(userData);
      const { token, user } = res;
      // dispatch the login action
      dispatch(login({ token, user }));
      // clear form
      setUserData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log("something went wrong");
      setUserData({
        password: "",
      });
    }
  };

  return (
    <div className="register-page-area pd-bottom-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-5 col-md-6 mb-5 mb-md-0">
            <form
              onSubmit={handleSubmit}
              className="contact-form-wrap contact-form-bg"
            >
              <h4>Login</h4>
              <div className="rld-single-input">
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="rld-single-input">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="btn-wrap">
                <button className="btn btn-yellow">Sign In</button>
              </div>
            </form>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6">
            <form className="contact-form-wrap contact-form-bg">
              <h4>Registration</h4>
              <div className="rld-single-input">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="rld-single-input">
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="rld-single-input">
                <input type="text" placeholder="Select User role" />
              </div>
              <div className="rld-single-input">
                <input type="text" placeholder="Password" />
              </div>
              <div className="rld-single-input">
                <input type="text" placeholder="Re-enter password" />
              </div>
              <div className="btn-wrap">
                <button className="btn btn-yellow">Register</button>
              </div>
              <ul className="social-icon">
                <li className="ml-0">
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook  " />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter  " />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
