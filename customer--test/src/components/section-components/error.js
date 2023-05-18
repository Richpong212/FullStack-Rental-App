import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import { Link } from 'react-router-dom';


class Error extends Component {

  componentDidMount() {
     const $ = window.$;
     var preLoder = $("#preloader");
     preLoder.fadeOut(0);
  }
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'


    return <div>
           <div className="error-page text-center">
            <div className="container">
              <div className="error-page-wrap d-inline-block">
                <Link to="/">Go Back</Link>
                <h2>404</h2>
              </div>
            </div>
          </div>
        </div>
    }
}

export default Error