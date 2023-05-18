import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Pricing extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.pricing


    return <div className="user-list-area pd-top-90 pd-bottom-70">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="title">{ data.tile }</h2>
            </div>
            <div className="row">
              { data.items.map( ( item, i )=>
                <div key={ i } className="col-lg-3 col-sm-6">
                  <div className="single-pricing text-center">
                    <div className="thumb double-img">
                      <img src={ publicUrl+item.icon } alt={ imagealt } />
                    </div>
                    <div className="details">
                      <h4 className="title">{ item.name }</h4>
                      <h3 className="price">{ item.price }</h3>
                      <h6>Every Week</h6>
                      <ul>

                        { item.feature.map( ( featuresitem, i )=>
                          <li key={ i }>{ featuresitem }</li>
                         ) }

                      </ul>
                      <a className="btn btn-yellow" href={ item.url }>{ item.btntxt }</a>
                    </div>
                  </div>
                </div>
                 ) }
            </div>
          </div>
        </div>
        }
    }

export default Pricing