import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class AppertmentSlider extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.appertmentslider


    return <div className="apartments-area pd-top-100">
        <div className="container">
          <div className="apartments-slider">
            { data.items.map( (item, i)=> 
              <div key={ i } className="item">
                <div className="row justify-content-center">
                  <div className="col-lg-6 offset-lg-2">
                    <div className="thumb">
                      <h2 className="title">{ item.title }</h2>
                      <img src={publicUrl+item.image} alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-3 align-self-center">
                    <div className="details">
                      <h2 className="title">{ item.title }</h2>
                      <h4 className="mb-0"><del>{ item.OlderPrice }</del></h4>
                      <h3>{ item.newPrice }</h3>
                      { item.itemlists.map( (itemlist, i)=> 
                        <div key={ i }>
                          <h5 className="sub-title">{ itemlist.title }</h5>
                          <span><i className={itemlist.icon} />{ itemlist.subtitle }</span>
                        </div>
                       ) }

                    </div>
                  </div>
                </div>
              </div>
            ) }

          </div>
        </div>
      </div>
        }
}

export default AppertmentSlider