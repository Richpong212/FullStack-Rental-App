import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class BannerV3 extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.bannerv3

        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+'/assets/img/bg/3.png)'
        }

    return <div>
              <div className="banner-area jarallax" style={ inlineStyle }>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-10">
                        <div className="banner-inner-wrap">
                          <div className="banner-inner w-100">
                            <h1 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h1>
                            <p className="content"  dangerouslySetInnerHTML={{__html: data.subtitle}}></p>
                            <div className="rld-banner-search">
                              <div className="rld-single-input left-icon">
                                <input type="text" placeholder="Find Property" />
                                <button className="btn-home3 realdealtop"><Link  to="/search-list">Search Now</Link></button>
                              </div>
                            </div>
                          </div>
                        </div>   
                      </div>
                      <div className="col-xl-5 col-lg-6 d-lg-block d-none">
                        <div className="thumb-wrap">
                          <img src={publicUrl+"assets/img/banner/2.png"} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

          </div>

        }
}

export default BannerV3