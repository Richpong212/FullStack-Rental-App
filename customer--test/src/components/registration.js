import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import RegistrationSection from "./section-components/registration";
import Footer from "./global-components/footer";

const Registration = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Registration" />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Registration;
