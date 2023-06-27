import React from "react";
import "./createProperty.scss";

const CreatePropertyHeader = () => {
  // background image
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div
      style={{
        backgroundImage: "url(" + publicUrl + "/assets/img/bg/addProps01.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        width: "100%",
        height: "50vh",
      }}
    >
      <div className="container create">
        <h3>Add Property</h3>
      </div>
    </div>
  );
};

export default CreatePropertyHeader;
