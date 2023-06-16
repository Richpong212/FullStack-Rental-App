import React, { useEffect, useState } from "react";
import "./singleProperty.scss";
import { useLocation } from "react-router";
import { getSingleProperty } from "../../../service/property.service";

const SinglePropertyHeader = () => {
  // state to hold the property
  const [property, setProperty] = useState<any>({}); // background image
  const publicUrl = process.env.PUBLIC_URL;

  // get location from url
  const location = useLocation();

  // get the id from the url
  const path = location.pathname.split("/")[2];

  // useeffect to get the property by slug
  useEffect(() => {
    // function to fetch the property by slug
    const getProperty = async () => {
      const property = await getSingleProperty(path);
      setProperty(property.property);
    };

    // call the function
    getProperty();
  }, [path]);

  return (
    <div
      style={{
        backgroundImage: "url(" + publicUrl + "/assets/img/banner/single.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center bottom ",
        width: "100%",
        height: "50vh",
      }}
    >
      <div className="container singletitle">
        <h3>{property.title}</h3>
      </div>
    </div>
  );
};

export default SinglePropertyHeader;
