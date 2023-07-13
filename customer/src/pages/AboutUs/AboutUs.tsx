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
         <p className="faq__gap col-4"> <h1 className="fw-bold aboutus__numbers">01</h1>
           <h4 className="fw-bold">Our Mission</h4> 
            Lorem ipsum dolor sit <br/>
            laborum. Eveniet inventore<br/>
            placeat ipsam explicabo<br/>
          </p>

          <p className="faq__gap col-4">  <h1 className="fw-bold aboutus__numbers">02</h1>
            <h4 className="fw-bold">Our Vision</h4> 
            Lorem ipsum dolor sit <br/>
            laborum. Eveniet inventore<br/>
            placeat ipsam explicabo<br/>
         </p>

          <p className="faq__gap col-4">  <h1 className="fw-bold aboutus__numbers">03</h1>
            <h4 className="fw-bold">Our Believe</h4> 
            Lorem ipsum dolor sit <br/>
            laborum. Eveniet inventore<br/>
            placeat ipsam explicabo<br/>
          </p>
        </span>
        <div className="container">
          <div className="col-6">
             <div className=" missionVission__card">
             </div>
             <span className="card-img img">
               <img src="/assets/img/banner/aboutUsimg.jpg" className="rounded-start" />
             </span>
          </div>
          <div className="col-6">
            About our Mission and Vision
          </div>
       </div>
     </div>
   </div>
  )
}

export default AboutUs
