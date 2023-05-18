/* eslint-disable no-undef */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import blogdata from "../../data/blogdata.json";
class PostList extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let data = blogdata.blogs;
    return (
      <div>
        <div className="property-news-area pd-top-100 pd-bottom-70">
          <div className="container">
            <div className="row">
              {data.map((item, i) => (
                <div key={i} className="col-lg-6">
                  <div className="single-news">
                    <div className="thumb">
                      <img src={publicUrl + item.image} alt={imagealt} />
                    </div>
                    <div className="details">
                      <h4>
                        <Link to={item.url}>{item.title}</Link>
                      </h4>
                      <p>{item.content}</p>
                      <div className="author">
                        <img
                          src={publicUrl + item.authorimage}
                          alt={imagealt}
                        />
                        <span>By {item.author}</span>
                        <span className="date">{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
