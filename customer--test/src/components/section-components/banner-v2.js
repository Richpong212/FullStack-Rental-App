import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class BannerV2 extends Component {

    componentDidMount() {

    const $ = window.$;
    
     if ($('.single-select').length){
            $('.single-select').niceSelect();
        }
  }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+'/assets/img/banner/1.jpg)'
        }

    return <div>
          {/* banner area start */}
          <div className="banner-area jarallax" style={ inlineStyle }>
            <div className="container">
              <div className="banner-inner-wrap">
                <div className="row">
                  <div className="col-12">
                    <div className="banner-inner">
                      <h5 className="sub-title">{ data.subtitle }</h5>
                      <h1 className="title">{ data.title1 } <br /> { data.title2 }</h1>
                      <div className="banner-btn-wrap">
                        <a className="btn btn-yellow float-left mr-2" href={ data.btnurl }>{ data.btntxt }</a>
                        <a href={ data.videolink } className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* banner area end */}
          {/* main search area end */}
          <div className="main-search-area">
            <div className="container">
              <div className="banner-search-wrap">
                <ul className="nav nav-tabs rld-banner-tab">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#tabs_1">For Buy</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs_2">For Rent</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tabs_1">
                    <div className="rld-main-search">
                      <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="rld-single-input left-icon">
                            <input type="text" placeholder="Entry Landmark Location" />
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
                        <div className="col-xl-2 col-lg-4 col-md-4">
                           <Link className="btn btn-yellow" to="/search-list">SEARCH NOW</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs_2">
                    <div className="rld-main-search">
                      <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="rld-single-input left-icon">
                            <input type="text" placeholder="Entry Landmark Location" />
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
                        <div className="col-xl-2 col-lg-4 col-md-4">
                           <Link className="btn btn-yellow" to="/search-list">SEARCH NOW</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* main search area end */}
        </div>

        }
}

export default BannerV2