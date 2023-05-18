import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class UserList extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.userlist


    return <div className="user-list-area pd-top-100 pd-bottom-70">
          <div className="container">
            <div className="row">
              { data.items.map( ( item, i )=>
                <div key={ i } className="col-lg-4 col-md-6">
                  <div className="single-user-list text-center">
                    <div className="thumb">
                      <img src={ publicUrl+item.icon } alt={ imagealt } />
                    </div>
                    <div className="details">
                      <h4><a href={ item.url } >{ item.name }</a></h4>
                      <p dangerouslySetInnerHTML={{__html:item.address}}></p>
                      <span className="phone"><i className="fa fa-phone" />{ item.mobile }</span>
                      <span className="fax"><i className="fa fa-fax" />{ item.phone }</span>
                      <div className="social-list">
                         { item.social.map( ( socialitem, i )=>
                            <a key={ i } href={ socialitem.url }><i className={ socialitem.icon } /></a>
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

export default UserList