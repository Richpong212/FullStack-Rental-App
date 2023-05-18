import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class SellHome extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.sellhome


    return <div className="sell-home-area rld-1-3-bg pd-top-100 pd-bottom-100" style={{backgroundImage: 'url(assets/img/bg/6.png)'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="shape-image-list-wrap">
                  <img className="shadow-img" src={ publicUrl+data.image } alt={ imagealt } />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="section-title pd-left mb-0">
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

export default SellHome