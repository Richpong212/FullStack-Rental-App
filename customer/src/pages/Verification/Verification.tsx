import React, { useEffect, useState } from "react";
import "./Verification.scss";
import { useNavigate, useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { activateUser } from "../../service/customer.service";
import { ToastContainer, toast } from "react-toastify";

const Verification = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  //navigate
  const navigate = useNavigate();

  // get the token from the url
  const tokenParam: any = useParams<{ token: string }>();

  // decode the token
  const decoded: any = jwtDecode(tokenParam.id);

  // verify the token
  const veryfyToken = async () => {
    try {
      const res = await activateUser(tokenParam.id);
      toast.success(`${res.message}`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error: any) {
      toast.error(`${error.response.data.message}`, {
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

  // set the name and token in useEffect
  useEffect(() => {
    if (decoded) {
      setName(decoded.fullName);
      setToken(tokenParam.id);
    }
    veryfyToken();
  }, []);

  return (
    <div className="verify globalstyles">
      <ToastContainer />
      <div className="verify__container">
        <h4 className="verify__title">Welcome {name}</h4>
        <p className="verify__text">Verification in progress...</p>
      </div>
    </div>
  );
};

export default Verification;
