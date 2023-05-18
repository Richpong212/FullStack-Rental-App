import React, { Component } from "react";
import sectiondata from "../../data/sections.json";

class WhyChooseUs extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL;
    let imagealt = "image";
    let data = sectiondata.whychooseus;

    return (
      <div className="why-choose-us-area bg-gray pd-top-90 pd-bottom-60">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">{data.title}</h2>
          </div>
          <div className="row justify-content-center">
            {data.items.map((item, i) => (
              <div
                key={i}
                className={"col-xl-3 col-lg-4 col-sm-6 " + item.class}
              >
                <div className="single-intro text-lg-left text-center">
                  <div className="thumb">
                    <img src={publicUrl + item.icon} alt={imagealt} />
                  </div>
                  <div className="details">
                    <h4 className="title">
                      <a href={item.url}>{item.title}</a>
                    </h4>
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default WhyChooseUs;
