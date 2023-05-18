import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class ServiceTwo extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.servicetwo
        const inlineStyle = {
               backgroundImage: 'url('+publicUrl+'/assets/img/bg/5.png)'
        }


    return <div className="service-area service-area-about mg-bottom-100 pb-xl-5 pd-0" style={ inlineStyle }>
        <div className="container">
          <div className="section-title">
            <h5 className="sub-title">{ data.subtitle }</h5>
            <h2 className="title">{ data.title }</h2>
            <p>{ data.content1 }<br /> { data.content2 }</p>
          </div>
          <div className="service-slider-2 row pb-xl-5 pd-0">
            { data.items.map( ( item, i )=>
                <div key={ i } className="item">
                  <div className="single-intro text-center">
                    <div className="thumb">
                      <img src={publicUrl+item.icon} alt={ imagealt } />
                    </div>
                    <div className="details">
                      <h4 className="title"><a href={ item.url }>{ item.title }</a></h4>
                      <p>{ item.content1 } <br /> { item.content2 }</p>
                      <a className="read-more" href={ item.url }>{ item.btntxt }</a>
                    </div>
                  </div>
              </div>

             ) }
            
          </div>
        </div>
      </div>
        }
}

export default ServiceTwo