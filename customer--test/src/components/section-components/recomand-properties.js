import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class RecomandProperties extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.recinabdproperties

    return <div className="recommended-area pd-top-90 pd-bottom-70">
          <div className="container">
            <div className="section-title">
              <h2 className="title">{ data.title }</h2>
              <a className="btn-view-all" href="#">View All</a>
            </div>
              <div className="row">
                { data.items.map( ( item, i )=>
                    <div key={ i } className="col-lg-3 col-sm-6">
                      <div className="single-feature">
                        <div className="thumb">
                          <img src={ publicUrl+item.image } alt="img" />
                        </div>
                        <div className="details">
                          <a href="#" className="feature-logo">
                            <img src={ publicUrl+item.icon } alt={ imagealt } />
                          </a>
                          <p className="author"><i className="fa fa-user" /> { item.authorname }</p>
                          <h6 className="title"><a href={ item.url }>{ item.title }</a></h6>
                          <h6 className="price">{ item.newerprice }</h6><del>{ item.olderprice }</del>
                          <ul className="info-list">
                            { item.features.map( ( features, i )=>
                              <li key={ i } ><i className={ features.icon } /> { features.title }</li>
                             ) } 
                            <li><img src={publicUrl+"/assets/img/icons/7.png" } alt={ imagealt } /> 1898 sq.</li>
                          </ul>
                          <ul className="contact-list">
                            <li><a className="phone" href="#"><i className="fa fa-phone" /></a></li>
                            <li><a className="message" href="#"><img src={ publicUrl+"/assets/img/icons/8.png" } alt="img" /></a></li>
                            <li><a className="btn btn-yellow" href="property-details.html">View Details</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                 ) }
              </div>
          </div>
        </div>

        }
}

export default RecomandProperties