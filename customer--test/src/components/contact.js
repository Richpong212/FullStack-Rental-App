import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import FaqSection from "./section-components/faq";
import Footer from "./global-components/footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Contact" />
      <div className="contact-area pd-top-100 pd-bottom-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-page-map">
                <iframe
                  className="w-100"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60021.82409444856!2d-122.40118071595978!3d37.7546723469594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1577786376747!5m2!1sen!2sbd"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
            <div className="col-lg-4">
              <form className="contact-form-wrap contact-form-bg">
                <h4>Contact Now</h4>
                <div className="rld-single-input">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="rld-single-input">
                  <input type="text" placeholder="Phone" />
                </div>
                <div className="rld-single-input">
                  <input type="text" placeholder="Phone" />
                </div>
                <div className="rld-single-input">
                  <textarea rows={10} placeholder="Message" defaultValue={""} />
                </div>
                <div className="btn-wrap text-center">
                  <button className="btn btn-yellow">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row pd-top-92">
            <div className="col-xl-3 col-sm-6">
              <div className="single-contact-info">
                <p>
                  <i className="fa fa-phone" />
                  Call Us:
                </p>
                <h5>(000) 111 222 333</h5>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="single-contact-info">
                <p>
                  <i className="fa fa-fax" />
                  Fax:
                </p>
                <h5>(000) 111 222 333</h5>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="single-contact-info">
                <p>
                  <i className="fa fa-envelope" />
                  Have any Question?
                </p>
                <h5>example@codingeek.net</h5>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="single-contact-info">
                <p>
                  <i className="fa fa-phone" />
                  Address
                </p>
                <h5>216 Trinity Ave, Pasadena,</h5>
                <h5>CA 95046, United States</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
