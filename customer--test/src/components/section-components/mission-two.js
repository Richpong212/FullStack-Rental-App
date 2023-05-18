import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Mission extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.missiontwo


    return <div className="mission-vission-area pd-top-100 pd-bottom-70">
        <div className="container">
          <div className="row justify-content-center">
          { data.items.map( ( item, i )=>
              <div key={ i } className={ "col-xl-3 col-lg-4 col-sm-6 mb-3 "+item.class }>
                <div className="single-intro text-lg-left text-sm-center">
                  <div className="thumb">
                    <img src={ publicUrl+item.image } alt={ imagealt } />
                  </div>
                  <div className="details">
                    <h4 className="title"><a href={ item.url }>{ item.title }</a></h4>
                    <p>{ item.content }</p>
                  </div>
                </div>
              </div>
           ) }
          
          </div>
        </div>
      </div>


        }
}

export default Mission