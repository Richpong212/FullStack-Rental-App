import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class AddNew extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.aboutus


    return <div className="add-new-property-area pd-top-90 mg-bottom-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-10">
                <div className="section-title text-center">
                  <h3>Add New Property</h3>
                </div>
                <div className="border-bottom mb-4">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-intro style-two text-center">
                        <div className="thumb">
                          1
                        </div>
                        <div className="details">
                          <h4 className="title">Choose Listing</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-intro style-two text-center">
                        <div className="thumb">
                          2
                        </div>
                        <div className="details">
                          <h4 className="title">Add Information</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-intro style-two text-center">
                        <div className="thumb">
                          3
                        </div>
                        <div className="details">
                          <h4 className="title">Publish</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <div className="section-title mb-md-0">
                      <h4 className="pt-lg-1 pt-2">Categories</h4>
                    </div>
                  </div>
                  <div className="col-7 text-right add-property-btn-wrap">
                    <a className="btn btn-yellow mr-md-3" href="#">Sell</a>
                    <a className="btn btn-yellow" href="#">Rent</a>
                  </div>
                </div>
                <div className="row pd-top-100">
                  <div className="col-md-4">
                    <div className="section-title">
                      <h4><img src={publicUrl+"assets/img/icons/28.png" }alt="img" />House Name</h4>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="section-title">
                      <h4>Jason Landville Apartments</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Bedrooms</option>
                            <option value={2}>Bedrooms 1</option>
                            <option value={3}>Bedrooms 2</option>
                            <option value={3}>Bedrooms 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Bathrooms</option>
                            <option value={2}>Bathrooms 1</option>
                            <option value={3}>Bathrooms 2</option>
                            <option value={3}>Bathrooms 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Interior Size</option>
                            <option value={2}>Interior Size 1</option>
                            <option value={3}>Interior Size 2</option>
                            <option value={3}>Interior Size 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Parking</option>
                            <option value={2}>Parking 1</option>
                            <option value={3}>Parking 2</option>
                            <option value={3}>Parking 3</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pd-top-80">
                  <div className="col-md-4">
                    <div className="section-title">
                      <h4><img src={publicUrl+"assets/img/icons/29.png"} alt="img" />Address</h4>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="section-title">
                      <h4>Address Here</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Country</option>
                            <option value={2}>Usa</option>
                            <option value={3}>Canada</option>
                            <option value={3}>China</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>State</option>
                            <option value={2}>State 1</option>
                            <option value={3}>State 2</option>
                            <option value={3}>State 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>ZIP Code</option>
                            <option value={2}>Interior Size 1</option>
                            <option value={3}>Interior Size 2</option>
                            <option value={3}>Interior Size 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Parking</option>
                            <option value={2}>Parking 1</option>
                            <option value={3}>Parking 2</option>
                            <option value={3}>Parking 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 mb-2">
                        <div className="rld-single-input">
                          <textarea rows={10} placeholder="Message" defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-12">
                        <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385276.5794773028!2d-115.51325829849152!3d41.1290219540523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1578810733172!5m2!1sen!2sbd" height={350} style={{border: 0}} allowFullScreen />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pd-top-80">
                  <div className="col-md-4">
                    <div className="section-title">
                      <h4><img src={publicUrl+"assets/img/icons/30.png"} alt="img" />Lease</h4>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-12 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Monthly Rent</option>
                            <option value={2}>$700.00</option>
                            <option value={3}>$500.00</option>
                            <option value={3}>$900.00</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Security Diposite</option>
                            <option value={2}>1 Month</option>
                            <option value={3}>2 Month</option>
                            <option value={3}>3 Month</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Lease Durations</option>
                            <option value={2}>On Set</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pd-top-80">
                  <div className="col-md-4">
                    <div className="section-title">
                      <h4><img src={publicUrl+"assets/img/icons/31.png"} alt="img" />Amenities</h4>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-sm-4">
                        <ul className="rld-list-style mb-3 mb-sm-0">
                          <li><i className="fa fa-check" /> Attic</li>
                          <li><i className="fa fa-check" /> Poll</li>
                          <li><i className="fa fa-check" /> Concierge</li>
                          <li><i className="fa fa-check" /> Basketball</li>
                          <li><i className="fa fa-check" /> Sprinklers</li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <ul className="rld-list-style mb-3 mb-sm-0">
                          <li><i className="fa fa-check" /> Recreation</li>
                          <li><i className="fa fa-check" /> Front Yard</li>
                          <li><i className="fa fa-check" /> Wine Cellar</li>
                          <li><i className="fa fa-check" /> Basketball</li>
                          <li><i className="fa fa-check" /> Fireplace</li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <ul className="rld-list-style mb-3 mb-sm-0">
                          <li><i className="fa fa-check" /> Balcony</li>
                          <li><i className="fa fa-check" /> Pound</li>
                          <li><i className="fa fa-check" /> Deck</li>
                          <li><i className="fa fa-check" /> 24x7 Sec</li>
                          <li><i className="fa fa-check" /> Indoor Game</li>
                        </ul>
                      </div>
                      <div className="col-12 mt-5">
                        <a className="btn btn-yellow" href="#">Publish property</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        }
}

export default AddNew