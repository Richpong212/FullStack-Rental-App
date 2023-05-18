import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class AboutV2 extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.aboutusv2


    return <div className="about-area pd-top-100 pd-bottom-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="section-title mb-lg-0">
                <h2 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h2>
                <p>{ data.content }</p>
                <Link className="btn-view-all-2" to={ data.url }>{ data.btn_text } <i className="la la-long-arrow-right" /></Link>
              </div>
            </div>
            <div className="col-lg-7"
            >
              <div className="row">
              { data.featureswithicon.map( ( item, i ) =>

                <div key={ i } className="col-md-4 col-sm-6">
                  <Link className="cat-single text-center">
                    <i className={ item.icon } />
                    <p>{ item.title }</p>
                  </Link>
                </div>

               ) }
              { data.featureswithimage.map( ( item, i ) =>
                <div key={ i } className="col-md-4 col-sm-6">
                  <Link className="cat-single text-center">
                    <img src={publicUrl+item.image} alt="icons" />
                    <p>{ item.title }</p>
                  </Link>
                </div>
                ) }
              </div>
            </div>
          </div>
        </div>
      </div>


        }
}

export default AboutV2