/* eslint-disable no-undef */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import blogdata from "../../data/blogdata.json";

class PopularPost extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL;
    let imagealt = "image";
    let data = blogdata.popularpost;

    return (
      <div>
        <div className="popular-post-area">
          <div className="container">
            <div className="post-and-search">
              <div className="news-search-btn">
                <i className="fa fa-search" />
              </div>
              <form className="news-search-box">
                <input type="text" placeholder="Search" />
                <button>
                  <i className="fa fa-search" />
                </button>
              </form>
              <h6 className="mb-3 popular-post-title">{data.title}</h6>
              <div className="popular-post-slider">
                {data.items.map((item, i) => (
                  <div key={i} className="item">
                    <Link to={item.url} className="media single-popular-post">
                      <div className="media-left">
                        <img src={publicUrl + item.image} alt={imagealt} />
                      </div>
                      <div className="media-body">
                        <h6>{item.title}</h6>
                        <span>{item.date}</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularPost;
