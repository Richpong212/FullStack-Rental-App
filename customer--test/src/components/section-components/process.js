import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Process extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.process


    return <div className="process-area pd-top-100 pd-bottom-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-1 order-lg-12 mb-4 mb-lg-0">
                <div className="shape-image-list-wrap">
                  <div className="shape-image-list right-top">
                    <img className="shadow-img" src={ publicUrl+data.image } alt={ imagealt } />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 align-self-center order-lg-1">
                <div className="section-title mb-0">
                  <h2 className="title inner-title">{ data.title1 } <br />{ data.title2 }</h2>
                  <p>{ data.content }</p>
                  <a className="btn btn-yellow" href={ data.url }>{ data.btn_text }</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        }
    }

export default Process