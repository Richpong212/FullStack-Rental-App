import React, { useEffect } from "react";
import sectiondata from "../../data/sections.json";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperty } from "../../service/propertyService";

const Property = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";
  let data = sectiondata.property;

  // dispatch
  const dispatch = useDispatch();

  // get properties
  useEffect(() => {
    getAllProperty(dispatch);
  }, [dispatch]);

  // get all the properties
  const properties = useSelector((state) => state.property.properties);

  return (
    <div className="property-area pd-top-100">
      <div className="container">
        <div className="row custom-gutter">
          <div className="col-lg-12">
            <div className="property-filter-menu-wrap">
              <div className="property-filter-menu portfolio-filter text-center">
                <button data-filter="*" className="active">
                  All Properties
                </button>
                <button data-filter=".cat1">Top Properties</button>
                <button data-filter=".cat2">Biggest Home</button>
                <button data-filter=".cat3">High Demand</button>
                <button data-filter=".cat4">Verified Home</button>
              </div>
            </div>
          </div>
        </div>
        {/*Property filter Start*/}
        <div className="property-filter-area row custom-gutter">
          <div className="gallery-sizer col-1" />
          {/*property item Start*/}
          {data.items.map((item, i) => (
            <div
              key={i}
              className={"rld-filter-item  col-lg-3 col-sm-6 " + item.cat}
            >
              <div className="single-feature">
                <div className="thumb">
                  <img src={publicUrl + item.image} alt="img" />
                </div>
                <div className="details">
                  <a href="#" className="feature-logo">
                    <img src={publicUrl + item.icon} alt={imagealt} />
                  </a>
                  <p className="author">
                    <i className="fa fa-user" /> {item.authorname}
                  </p>
                  <h6 className="title readeal-top">
                    <Link to={item.url}>{item.title}</Link>
                  </h6>
                  <h6 className="price">{item.newerprice}</h6>
                  <del>{item.olderprice}</del>
                  <ul className="info-list">
                    {item.features.map((features, i) => (
                      <li key={i}>
                        <i className={features.icon} /> {features.title}
                      </li>
                    ))}
                    <li>
                      <img
                        src={publicUrl + "/assets/img/icons/7.png"}
                        alt={imagealt}
                      />{" "}
                      {item.area}
                    </li>
                  </ul>
                  <ul className="contact-list">
                    <li>
                      <a className="phone" href="#">
                        <i className="fa fa-phone" />
                      </a>
                    </li>
                    <li>
                      <a className="message" href="#">
                        <img
                          src={publicUrl + "/assets/img/icons/8.png"}
                          alt="img"
                        />
                      </a>
                    </li>
                    <li className="readeal-top">
                      <Link className="btn btn-yellow" to={item.url}>
                        View Details
                      </Link>
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

export default Property;
