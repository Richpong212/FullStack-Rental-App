import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class Ads extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.ads

        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+'/assets/img/bg/1.png)'
        }

    return <div className="call-to-action-area pd-top-70">
              <div className="container">
                <div className="call-to-action" style={ inlineStyle }>
                  <div className="cta-content">
                    <h3 className="title">{ data.title }</h3>
                    <Link className="btn btn-white" to={ data.url }>{ data.btntxt }</Link>
                  </div>
                </div>
              </div>
          </div>


        }
}

export default Ads