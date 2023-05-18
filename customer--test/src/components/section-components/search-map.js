import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class SearchMap extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.searchgrid
        let searchlist = sectiondata.searchlist


    return <div className="search-page-area ">
          <div className="search-container">
            {/* search map start */}
            <div className="search-page-search-wrap">
              <div className="search-page-map">
                <div id="gmap" />
              </div>
            </div>
            <div className="search-page-right-wrap pd-bottom-70">
              <div className="search-page-right-side">
                <div className="row">
                  <div className="col-sm-8">
                    <div className="section-title">
                      <h4 className="title">Apartments</h4>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <ul className="nav nav-tabs rld-search-page-tab float-sm-right">
                      <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#tabs_1"><i className="fa fa-th" /></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs_2"><i className="fa fa-list-ul" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rld-main-search">
                  <div className="row">
                    <div className="colx col1">
                      <div className="rld-single-input left-icon">
                        <input type="text" placeholder="Entry Landmark Location" />
                      </div>
                    </div>
                    <div className="colx col2">
                      <div className="rld-single-select">
                        <select className="select single-select">
                          <option value={1}>All Properties</option>
                          <option value={2}>Properties 1</option>
                          <option value={3}>Properties 2</option>
                          <option value={3}>Properties 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="colx col3">
                      <div className="rld-single-select">
                        <select className="select single-select">
                          <option value={1}>Room</option>
                          <option value={2}>Room 1</option>
                          <option value={3}>Room 2</option>
                          <option value={3}>Room 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="colx col3">
                      <div className="rld-single-select">
                        <select className="select single-select">
                          <option value={1}>Any Price</option>
                          <option value={2}>Price 1</option>
                          <option value={3}>Price 2</option>
                          <option value={3}>Price 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="colx col3">
                      <a className="btn btn-yellow" href="#">SEARCH NOW</a>
                    </div>
                  </div>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tabs_1">
                    <div className="row justify-content-center">
                        { data.items.map( ( item, i )=>
                          <div key={ i } className="col-xl-4 col-sm-6">
                            <div className="single-feature">
                              <div className="thumb">
                               <img src={ publicUrl+item.image } alt="img" />
                            </div>
                            
                              <div className="details">
                                <a href="#" className="feature-logo">
                                   <img src={ publicUrl+item.icon } alt={ imagealt } />
                                </a>
                                <p className="author"><i className="fa fa-user" /> { item.authorname }</p>
                                <h6 className="title"><a href={ item.url }>{ item.title }</a></h6>
                                <h6 className="price">{ item.newerprice }</h6><del>{ item.olderprice }</del>
                                <ul className="info-list">
                                  { item.features.map( ( features, i )=>
                                    <li key={ i } ><i className={ features.icon } /> { features.title }</li>
                                   ) } 
                                  <li><img src={publicUrl+"/assets/img/icons/7.png" } alt={ imagealt } /> { item.area }  </li>
                                </ul>
                                <ul className="contact-list">
                                  <li><a className="phone" href="#"><i className="fa fa-phone" /></a></li>
                                  <li><a className="message" href="#"><img src={ publicUrl+"/assets/img/icons/8.png" } alt="img" /></a></li>
                                  <li><a className="btn btn-yellow" href="property-details.html">View Details</a></li>
                                </ul>
                            </div>

                            </div>
                          </div>
                      ) }

                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs_2">
                    { searchlist.items.map( ( item, i )=>
                      <div key={ i } className="single-feature style-two">
                        <div className="thumb">
                           <img src={ publicUrl+item.image } alt="img" />
                        </div>
                        <div className="details">
                          <div className="details-wrap">
                            <a href="#" className="feature-logo">
                             <img src={ publicUrl+item.icon } alt={ imagealt } />
                            </a>
                           <p className="author"><i className="fa fa-user" /> { item.authorname }</p>
                               <h6 className="title"><a href={ item.url }>{ item.title }</a></h6>
                            <h6 className="price">$350/mo</h6><del>$790/mo</del>
                            <ul className="info-list">
                              { item.features.map( ( features, i )=>
                                <li key={ i } ><i className={ features.icon } /> { features.title }</li>
                               ) }
                               <li><img src={publicUrl+"/assets/img/icons/7.png" } alt={ imagealt } /> { item.area }  </li>
                            </ul>
                            <ul className="contact-list">
                              <li><a className="phone" href="#"><i className="fa fa-phone" /></a></li>
                              <li><a className="message" href="#"><img src={ publicUrl+"/assets/img/icons/8.png" } alt="img" /></a></li>
                              <li><a className="btn btn-yellow" href="property-details.html">View Details</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
        }
}

export default SearchMap