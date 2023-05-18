import React from "react";
import RegistrationHeader from "../../components/headers/RegistrationHeader/RegistrationHeader";
import "./Registration.scss";
import RegistrationSection from "../../components/registration/RegistrationSection";

const Registration = () => {
  let publicUrl = process.env.PUBLIC_URL;

  return (
    <>
      <div
        data-testid={"registration"}
        style={{
          backgroundImage: "url(" + publicUrl + "/assets/img/bg/register.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="globalmainstyles registration__header"
      >
        <RegistrationHeader />
      </div>
      <RegistrationSection />
    </>
  );
};

export default Registration;
