import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Calltoaction extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.client
        let PaddingTop = this.props.PaddingTop ? this.props.PaddingTop : 'pd-top-90'
        let PaddingBottom = this.props.PaddingBottom ? this.props.PaddingBottom : 'pd-bottom-100'

        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+'/assets/img/bg/1.png)'
        }


    return <div className="call-to-action-area pd-top-100">
          <div className="container">
            <div className="call-to-action style-two" style={ inlineStyle }>
              <div className="cta-content">
                <h3 className="title">Contact With Our Certificate Agent</h3>
                <a className="btn btn-white mb-2 mb-sm-0 mr-2" href="#">Make a Call</a>
                <a className="btn btn-white mb-2 mb-sm-0 mr-xl-3 mr-0" href="#">Get Appoinment</a>
              </div>
            </div>
          </div>
        </div>


        }
}

export default Calltoaction