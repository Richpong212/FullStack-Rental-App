import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Process extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.faq


    return <div className="faq-area pd-top-100 pd-bottom-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="section-title">
                  <h2 className="title"  dangerouslySetInnerHTML={{__html: data.title}}></h2>
                  <p>{ data.content }</p>
                </div>
                <div className="accordion" id="accordion">
                  {/* single accordion */}
                  { data.items.map( ( item, i )=>
                    <div key={ i } className="single-accordion card">
                        <div className="card-header" id= { "headingOne"+i }>
                          <h2 className="mb-0">
                            <button className="btn-link" type="button" data-toggle="collapse" data-target={ "#collapseOne"+i} aria-expanded="true" aria-controls={ "collapseOne"+i}>{ item.title }</button>
                          </h2>
                        </div>
                        <div id={ "collapseOne"+i} className={ "collapse "+item.class} aria-labelledby= { "headingOne"+i } data-parent="#accordion">
                          <div className="card-body">
                           { item.content }
                          </div>
                        </div>
                      </div>
                   ) }
                  


                </div>
              </div>
              <div className="col-xl-5 col-lg-6 offset-xl-1">
                <div className="shape-image-list-wrap">
                  <div className="shape-image-list left-top">
                    <img src={ publicUrl+data.image } alt={ imagealt } />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        }
    }

export default Process