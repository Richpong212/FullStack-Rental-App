import React from "react";
import "./propertystyles.scss";

const PropertiesHeader = () => {
  // background image
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div
      style={{
        backgroundImage:
          "url(" + publicUrl + "/assets/img/banner/propsHead1.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
        height: "50vh",
      }}
    >
      <div className="container properties">
        <h3 style={{color:"white"}}>Properties</h3>
      </div>
    </div>
  );
};

export default PropertiesHeader;
