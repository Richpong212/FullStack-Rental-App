import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class DreamSection extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.dream


    return <div className="follow-dream-area pd-top-70">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="thumb mb-4 mb-lg-0">
                    <img src={publicUrl+data.image } alt={ imagealt } />
                  </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="section-title">
                    <h3 className="title inner-title">{ data.sectiontitle }</h3>
                    <p>{ data.subtitle }</p>
                  </div>
                  { data.items.map( ( item, i )=>
                    <div key={ i } className={"single-follow-dream media "+item.class}>
                      <div className="media-left">
                        <i className={ item.icon } />
                      </div>
                      <div className="media-body">
                        <h4>{ item.title }</h4>
                        <p>{ item.content }</p>
                      </div>
                    </div>
                   ) }
                </div>
              </div>
            </div>
          </div>

        }
}

export default DreamSection