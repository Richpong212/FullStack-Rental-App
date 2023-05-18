import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PropertyHeader = () => {
  const [data, setData] = useState({});
  // get the slug from the url
  const location = useLocation();
  // get the slug from the url
  const slug = location.pathname.split("/")[2];

  //API Link
  const api = process.env.REACT_APP_API;

  // get data from the api
  const getData = async () => {
    try {
      const res = await axios.get(`${api}/properties/${slug}`);
      setData(res.data.property);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  // useEffect to get data from the api
  useEffect(() => {
    getData();
  }, []);

  let newImage = data.images;
  const inlineStyle = {
    backgroundImage: `url(${newImage})`,
  };
  return (
    <div className="breadcrumb-area jarallax" style={inlineStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inner">
              <h1 className="page-title">{}</h1>
              <ul className="page-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>properties</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
