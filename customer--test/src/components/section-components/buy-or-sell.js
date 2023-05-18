import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class BuyOrSell extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.buyorsell


    return <div className="buy-sell-area pd-bottom-70">
        <div className="container">
          <div className="section-title text-lg-center">
            <h2 className="title">{ data.title }</h2>
            <p>{ data.subtitle }</p>
          </div>
          <div className="row justify-content-center">
            { data.items.map( ( item, i )=>
                <div key={ i } className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="single-author style-two text-center">
                    <div className="thumb">
                      <img src={ publicUrl+item.icon } alt={ imagealt } />
                    </div>
                    <div className="author-details">
                      <a className="btn btn-yellow" href={ item.url } >{ item.btn_text }</a>
                    </div>
                  </div>
                </div>
             ) }
            
          </div>
        </div>
      </div>
        }
    }

export default BuyOrSell