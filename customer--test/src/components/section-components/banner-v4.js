import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class BannerV4 extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.bannerv4

        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+'/assets/img/banner/3.png)'
        }

    return <div>
              <div className="banner-area jarallax" style={ inlineStyle }>
              <div className="container">
                <div className="banner-inner-wrap">
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="banner-inner">
                        <h5 className="sub-title">{ data.title }</h5>
                        <h1 className="title">{ data.subtitle }</h1>
                        <div className="banner-btn-wrap">
                          <Link className="btn btn-yellow mr-2" to={ data.btnurl }>{ data.btntxt }</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        }
}

export default BannerV4