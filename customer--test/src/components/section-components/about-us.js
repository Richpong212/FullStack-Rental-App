import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class AboutUs extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.aboutus


    return <div className="about-area pd-bottom-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="shape-image-list-wrap">
                <div className="shape-image-list left-top">
                  <img className="shadow-img" src={publicUrl+data.image} alt={ imagealt } />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-title pd-left mb-0">
                <h5 className="sub-title">{ data.subtitle }</h5>
                <h2 className="title">{ data.title }</h2>
                <p>{ data.content }</p>
                <a className="btn btn-yellow" href={ data.url } >{ data.btn_text }</a>
              </div>
            </div>
          </div>
        </div>
      </div>

        }
}

export default AboutUs