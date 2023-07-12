import React from 'react';
import "./AboutUs.scss"

const AboutUs = () => {
  {/* Background image for the About us page */}
  const publicUrl=process.env.PUBLIC_URL
  return (
    <div className="faq__container">
     <div 
            style={{
            backgroundImage:
            "url(" + publicUrl + "/assets/img/banner/contact4.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            width: "100%",
            height: "60vh",
            }} className="faq__gap">
         <h1 style={{
           color:"#fff",
           fontWeight: "800",
           letterSpacing: "2px",
           paddingTop: "22rem",
           paddingLeft: "4rem"
           }}>About
         </h1> 
         </div> 
         <div>
        <span className="row container mission__vision" >
         <p className="faq__gap col-4"> <h1 style={{color:"#edb985"}}>01</h1>
           <h4 className="fw-bold">Our Mission</h4> Lorem ipsum dolor sit <br/>
            laborum. Eveniet inventore<br/>
            placeat ipsam explicabo sae<br/>
          </p>

          <p className="faq__gap col-4">  <h1 style={{color:"#edb985"}}>02</h1>
            <h4 className="fw-bold">Our Vision</h4> Lorem ipsum dolor sit <br/>
            laborum. Eveniet inventore<br/>
            placeat ipsam explicabo sae<br/>
         </p>

          <p className="faq__gap col-4">  <h1 style={{color:"#edb985"}}>03</h1>
            <h4 className="fw-bold">Our Believe</h4> Lorem ipsum dolor sit <br/>
            laborum. Eveniet inventore<br/>
            placeat ipsam explicabo sae<br/>
          </p>
        </span>
       <div className="container">

       </div>
     </div>
   </div>
  )
}

export default AboutUs
