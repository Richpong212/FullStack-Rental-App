import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class WhyChooseUs extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.client
        let PaddingTop = this.props.PaddingTop ? this.props.PaddingTop : 'pd-top-90'
        let PaddingBottom = this.props.PaddingBottom ? this.props.PaddingBottom : 'pd-bottom-100'


    return <div className={"client-area "+PaddingTop+' '+PaddingBottom}>
          <div className="container">
            <div className="section-title text-center">
              <h2 className="title">What Our Customers <br /> Are Saying</h2>
            </div>
            <div className="client-review-img">
              <img className="clr-img clr-img1" src={publicUrl+"/assets/img/client/5.png"} alt="client" />
              <img className="clr-img clr-img2" src={publicUrl+"/assets/img/client/6.png"} alt="client" />
              <img className="clr-img clr-img3" src={publicUrl+"/assets/img/client/7.png"} alt="client" />
              <img className="clr-img clr-img4" src={publicUrl+"/assets/img/client/8.png"} alt="client" />
              <img className="clr-img clr-img5" src={publicUrl+"/assets/img/client/9.png"} alt="client" />
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10">
                  <div className="client-slider-2 text-center">
                  { data.items.map( (item, i)=>
                      <div key={ i } className="item">
                        <div className="single-client-review">
                          <div className="thumb">
                            <img src={publicUrl+item.image} alt={ imagealt } />
                          </div>
                          <div className="review-details">
                            <p>{ item.content }</p>
                            <h4>{ item.name }</h4>
                            <p>{ item.designation }</p>
                          </div>
                        </div>
                    </div>
                   ) }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        }
}

export default WhyChooseUs