import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Homepage/Home";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/RegisterPage/Register";
import Header from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import CreateProperty from "../pages/CreeateProperty/CreateProperty";

const Index = () => {
  const user = useSelector((state: any) => state.user.data.isLoggedIn);
  return (
    <>
      <BrowserRouter>
        {
          // if there is a user show header
          user && <Header />
        }
        <Routes>
          {
            // if there is a user show home page
            user ? (
              <Route path="/" element={<Home />} />
            ) : (
              <Route path="/" element={<Navigate to="/login" />} />
            )
          }
          {
            // if there is a user show home page
            user ? (
              <Route path="/create-property" element={<CreateProperty />} />
            ) : (
              <Route
                path="/create-property"
                element={<Navigate to="/login" />}
              />
            )
          }
          {
            // if there is no user show register page
            !user ? (
              <Route path="/register" element={<Register />} />
            ) : (
              <Route path="/register" element={<Navigate to="/" />} />
            )
          }
          {
            // if there is no user show Login page
            !user ? (
              <Route path="/login" element={<Login />} />
            ) : (
              <Route path="/login" element={<Navigate to="/" />} />
            )
          }
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Index;
