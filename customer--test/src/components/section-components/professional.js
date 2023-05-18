import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Professional extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.profession


    return <div className="Professisonal-area pd-bottom-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-1 order-lg-12 mb-4 mb-lg-0">
                <div className="shape-image-list-wrap">
                  <img className="shadow-img" src={ publicUrl+data.image } alt={ imagealt } />
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

export default Professional