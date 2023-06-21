import React from "react";
import "./Contact.scss";

const Contact = () => {
  //Background image for the contact page
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div
      style={{
        backgroundImage:
          "url(" + publicUrl + "/assets/img/banner/contact4.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
        height: "70vh",
      }}
      className="maplinestyles"
    >
      {" "}
      <h1
        style={{
          fontWeight: "800",
          letterSpacing: "2px",
          paddingBottom: "12rem",
          marginTop: "17rem",
        }}
      >
        Contact
      </h1>
      <div className="container maplistyles">
        <div className="row">
          <div className="col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47735.69421189946!2d-0.15923610119221684!3d5.691746398958357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf836a25eb6255%3A0xa132f6833cba6e8e!2sadjiringanor%20Ability%20Square%20Down!5e0!3m2!1sen!2sgh!4v1686085904149!5m2!1sen!2sgh"
              width="620"
              height="500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

          <div className="container col contactnow">
            <div className="">
              <h3>Contact Now</h3>
              <form className="row">
                <div mb-3>
                  <label htmlFor="Name" className="form-label"></label>
                  <input
                    className="form-control"
                    type="text"
                    id="Name"
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="">
                  <label htmlFor="emailInfo" className="form-label"></label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder=" Email"
                    required
                  />
                </div>

                <div className="">
                  <label htmlFor="phoneNumber" className="form-label"></label>
                  <input
                    className="form-control"
                    type="text"
                    id="phoneNumber"
                    placeholder="Phone +233 240172381"
                  />
                </div>

                <div className="">
                  <label htmlFor="comment" className="form-label"></label>
                  <textarea
                    className="form_control"
                    id="comment"
                    placeholder="  Comment"
                    rows={3}
                  ></textarea>
                </div>
              </form>
              <div className="">
                <button
                  style={{ backgroundColor: "#ECA760", color: "#fff" }}
                  className="btn"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
