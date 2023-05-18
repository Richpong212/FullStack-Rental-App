/* eslint-disable no-undef */
import React, { Component } from "react";

class Comments extends Component {
  render() {
    let imagealt = "image";
    let publicUrl = process.env.PUBLIC_URL;
    return (
      <div>
        <div className="comments-area">
          <h4 className="comments-title">Comments (2)</h4>
          <ul className="comment-list">
            <li>
              <div className="single-comment-wrap">
                <div className="thumb">
                  <img
                    src={publicUrl + "/assets/img/news/16.png"}
                    alt={imagealt}
                  />
                </div>
                <div className="content">
                  <h4 className="title">Sara Koivisto</h4>
                  <p>
                    Fun kitchen and not cookie cutter! The appliance garage is
                    easy to access and good looking on the inside too. I’ve also
                    recently remodeled my kitchen and eliminated{" "}
                  </p>
                  <a href="#" className="like">
                    <i className="fa fa-heart-o" />
                    Like 235
                  </a>
                  <a href="#" className="reply">
                    Reply
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="single-comment-wrap">
                <div className="thumb">
                  <img
                    src={publicUrl + "/assets/img/news/17.png"}
                    alt={imagealt}
                  />
                </div>
                <div className="content">
                  <h4 className="title">Sara Koivisto</h4>
                  <p>
                    Fun kitchen and not cookie cutter! The appliance garage is
                    easy to access and good looking on the inside too. I’ve also
                    recently remodeled my kitchen and eliminated{" "}
                  </p>
                  <a href="#" className="like">
                    <i className="fa fa-heart-o" />
                    Like 235
                  </a>
                  <a href="#" className="reply">
                    Reply
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="single-comment-wrap">
                <div className="thumb">
                  <img
                    src={publicUrl + "/assets/img/news/18.png"}
                    alt={imagealt}
                  />
                </div>
                <div className="content">
                  <h4 className="title">Sara Koivisto</h4>
                  <p>
                    Fun kitchen and not cookie cutter! The appliance garage is
                    easy to access and good looking on the inside too. I’ve also
                    recently remodeled my kitchen and eliminated{" "}
                  </p>
                  <a href="#" className="like">
                    <i className="fa fa-heart-o" />
                    Like 235
                  </a>
                  <a href="#" className="reply">
                    Reply
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* comments-area-end */}
        {/* blog-comment-area start */}
        <div className="blog-comment-area pd-bottom-100">
          <form className="rld-comment-form">
            <h4 className="single-page-small-title">Write A Coment.</h4>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="rld-single-input">
                  <input type="text" placeholder="Name" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="rld-single-input">
                  <input type="text" placeholder="Email" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="rld-single-input">
                  <textarea rows={10} placeholder="Message" defaultValue={""} />
                </div>
              </div>
              <div className="col-12">
                <a className="btn btn-yellow" href="#">
                  Send Comment
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Comments;
