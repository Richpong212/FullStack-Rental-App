import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class RoomSpacing extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.roomspacing


    return <div className="apartments-area bg-gray pd-top-100 pd-bottom-100">
          <div className="container">
            <div className="apartments-slider-2">
              { data.items.map( ( item, i )=>
                <div key={ i } className="item">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7">
                      <div className="thumb">
                        <img src={publicUrl+item.image} alt={ imagealt } />
                      </div>
                    </div>
                    <div className="col-lg-6 align-self-end">
                      <div className="details">
                        <span>{ item.number }</span>
                        <h6>{ item.subtitle }</h6>
                        <h2 className="title">{ item.title }</h2>
                        <p>{ item.content }</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <ul className="rld-list-style mb-3 mb-sm-0">
                            { item.listone.map( ( list, i )=>
                              <li key={ i }><i className="fa fa-check" /> { list }</li>
                              ) }
                            </ul>
                          </div>
                          <div className="col-sm-6">
                            <ul className="rld-list-style">
                             { item.listtwo.map( ( list, i )=>
                              <li><i className="fa fa-check" />{ list }</li>
                               ) }
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               ) }

            </div>
            <div className="ap2-slider-controls">
              {/*slider-nav*/}
              <div className="rld-slider-extra slider-extra">
                <div className="text">
                  <span className="first">01 </span>
                  <span className="last" />
                </div>
                {/*text*/}
                <div className="ap2-list-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                  <span className="slider__label sr-only" />
                </div>
                <div className="slider-nav rld-control-nav" />
              </div>
              {/*slider-extra*/}
            </div>
          </div>
        </div>
        }
}

export default RoomSpacing