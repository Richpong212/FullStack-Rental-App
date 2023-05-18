import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const Service = () => {
  let publicUrl = process.env.PUBLIC_URL;
  let data = sectiondata.services;

  return (
    <div className="service-area h1-service-slider-area">
      <div className="container">
        <div className="service-slider">
          {data.items.map((item, i) => (
            <div key={i} className="item">
              <div className="single-service text-center">
                <div className="thumb double-img">
                  <img src={publicUrl + item.icon} alt="icons" />
                </div>
                <div className="details readeal-top">
                  <h4>
                    <Link to="">{item.title}</Link>
                  </h4>
                  <Link className="readmore-btn" to="">
                    {item.btntxt} <i className="la la-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
