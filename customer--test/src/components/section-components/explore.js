import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import { Link } from "react-router-dom";

const Explore = () => {
  let publicUrl = process.env.PUBLIC_URL;
  let data = sectiondata.explore;

  return (
    <div className="explore-area pd-top-85">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="title"> {data.title} </h2>
        </div>
        <div className="row">
          {data.items.map((item, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="single-explore">
                <div className="thumb">
                  <img src={publicUrl + item.image} alt="explore" />
                  <a href="#">
                    <i className="fa fa-paper-plane" />
                  </a>
                </div>
                <div className="details readeal-top">
                  <h4>
                    <Link to="/properties-by-city">{item.city}</Link>
                  </h4>
                  <ul className="list">
                    <li>
                      <img
                        src={publicUrl + "/assets/img/icons/1.png"}
                        alt="icona"
                      />
                      Listings: {item.lisgintnumber}
                    </li>
                    <li>
                      <i className="fa fa-usd" />
                      Price: ${item.price}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
