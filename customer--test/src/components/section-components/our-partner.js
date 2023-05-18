import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class OurPartner extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL;
    let data = sectiondata.partner;

    return (
      <div className="client-area pd-top-92 pd-bottom-100">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">{data.title}</h2>
          </div>
          <div className="client-slider">
            {data.items.map((item, i) => (
              <div key={i} className="item">
                <div className="thumb">
                  <img src={publicUrl + item.image} alt="client" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default OurPartner;
