import React from "react";
import "./Contact.scss"

const Contact = () => {
  
  //Background image for the contact page
  const publicUrl= process.env.PUBLIC_URL;

  return (
  <div 
  style={{
    backgroundImage: "url(" + publicUrl + "/assets/img/banner/contact4.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "100%",
    height: "70vh",
  }}
  className="globalmainstyles"
  > <h1 
       style={{ 
        fontWeight:"800", 
        letterSpacing:"2px", 
        padding: "14.5rem 0rem"
        }}>Contact</h1>

        
     <div className="contactnow__container">
       <div>
        <h3>Map</h3>
       </div>
        <div className="contactnow">
          <h3 >Contact Now</h3>
        </div>
     </div>
  </div>
)};

export default Contact;
