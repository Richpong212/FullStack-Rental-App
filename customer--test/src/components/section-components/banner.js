import React, { Component } from "react";
import { Link } from "react-router-dom";
import sectiondata from "../../data/sections.json";

class Banner extends Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".single-select").length) {
      $(".single-select").niceSelect();
    }
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL;
    let data = sectiondata.banner;

    const inlineStyle = {
      backgroundImage: "url(" + publicUrl + "/assets/img/banner/home2.jpg)",
    };

    return (
      <div className="banner-area jarallax" style={inlineStyle}>
        <div className="container">
          <div className="banner-inner-wrap">
            <div className="row">
              <div className="col-12">
                <div className="banner-inner">
                  <h5 className="sub-title">{data.subtitle}</h5>
                  <h1 className="title">
                    {data.title1} <br /> {data.title2}
                  </h1>
                </div>
              </div>
              <div className="col-12">
                <div className="banner-search-wrap">
                  <ul className="nav nav-tabs rld-banner-tab">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tabs_1"
                      >
                        For Buy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#tabs_2">
                        For Rent
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="tabs_1">
                      <div className="rld-main-search">
                        <div className="row">
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="rld-single-input left-icon">
                              <input
                                type="text"
                                placeholder="Entry Landmark Location"
                              />
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-6 col-md-6">
                            <div className="rld-single-select">
                              <select className="select single-select">
                                <option value={1}>All Properties</option>
                                <option value={2}>Properties 1</option>
                                <option value={3}>Properties 2</option>
                                <option value={3}>Properties 3</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4 col-md-4">
                            <div className="rld-single-select">
                              <select className="select single-select">
                                <option value={1}>Room</option>
                                <option value={2}>Room 1</option>
                                <option value={3}>Room 2</option>
                                <option value={3}>Room 3</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4 col-md-4">
                            <div className="rld-single-select">
                              <select className="select single-select">
                                <option value={1}>Any Price</option>
                                <option value={2}>Price 1</option>
                                <option value={3}>Price 2</option>
                                <option value={3}>Price 3</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4 col-md-4 readeal-top">
                            <Link className="btn btn-yellow" to="/search-list">
                              SEARCH NOW
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabs_2">
                      <div className="rld-main-search">
                        <div className="row">
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="rld-single-input left-icon">
                              <input
                                type="text"
                                placeholder="Entry Landmark Location"
                              />
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-6 col-md-6">
                            <div className="rld-single-select">
                              <select className="select single-select">
                                <option value={1}>All Properties</option>
                                <option value={2}>Properties 1</option>
                                <option value={3}>Properties 2</option>
                                <option value={3}>Properties 3</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4 col-md-4">
                            <div className="rld-single-select">
                              <select className="select single-select">
                                <option value={1}>Room</option>
                                <option value={2}>Room 1</option>
                                <option value={3}>Room 2</option>
                                <option value={3}>Room 3</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4 col-md-4">
                            <div className="rld-single-select">
                              <select className="select single-select">
                                <option value={1}>Any Price</option>
                                <option value={2}>Price 1</option>
                                <option value={3}>Price 2</option>
                                <option value={3}>Price 3</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4 col-md-4 readeal-top">
                            <Link className="btn btn-yellow" to="/search-list">
                              SEARCH NOW
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
