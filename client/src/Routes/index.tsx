import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/RegisterPage";
import Navbar from "../components/Layout/Navbar";
import SingleProperty from "../Pages/SingleProperty";
import LoginPage from "../Pages/LoginPage";
import ActivatePage from "../Pages/ActivatePage";
import Profile from "../Pages/Profile";
import { useSelector } from "react-redux";
import AllProperties from "../Pages/AllProperties";
import Footer from "../components/Layout/Footer";

const Index = () => {
  const isLoggedIn = useSelector((state: any) => state.user.data.isLoggedIn);

  return (
    <BrowserRouter>
      {/*Navbar */}
      <nav>
        <Navbar />
      </nav>
      {/*Navbar */}

      {/*main */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* protected routes  */}
        {!isLoggedIn && (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
          </>
        )}

        {/* end of  protected routes  */}
        <Route path="/property/:id" element={<SingleProperty />} />
        <Route path="/properties" element={<AllProperties />} />
        <Route path="/activate/:id" element={<ActivatePage />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
      {/*main */}

      {/*Footer */}
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default Index;
