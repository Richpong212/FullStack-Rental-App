import React from 'react';
import "./AboutUs.scss"

const AboutUs = () => {
  {/* Background image for the About us page */}
  const publicUrl=process.env.PUBLIC_URL
  return (
    <div className="faq__container">
       {/* Styling the ackground image for the About us page */}
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
           paddingLeft: "5rem"
           }}>About
         </h1> 
         </div> 

          {/* Setting up the mini paragraph the About us page */}
         <div>
        <span className="row container mission__vision" >
          {/*  Mini paragraph 1 */}
         <p className="faq__gap col-4"> <h1 className="fw-bold aboutus__numbers">01</h1>
           <h4 className="fw-bold">Our Mission</h4> 
            Lorem ipsum dolor sit <br/>
            laborum. Eveniet inventore<br/>
            placeat ipsam explicabo<br/>
          </p>
            
            {/*  Mini paragraph 2 */}
          <p className="faq__gap col-4">  <h1 className="fw-bold aboutus__numbers">02</h1>
            <h4 className="fw-bold">Our Vision</h4> 
            Lorem ipsum dolor sit <br/>
            laborum. Eveniet inventore<br/>
            placeat ipsam explicabo<br/>
         </p>
           
            {/*  Mini paragraph 3 */}
          <p className="faq__gap col-4">  <h1 className="fw-bold aboutus__numbers">03</h1>
            <h4 className="fw-bold">Our Believe</h4> 
            Lorem ipsum dolor sit <br/>
            laborum. Eveniet inventore<br/>
            placeat ipsam explicabo<br/>
          </p>
        </span>

         {/* Staging the card image under the mini paragraphs*/}
        <div className="our__paragraph container">
          <div className="col-7 container ">
             {/*Setting up the little orange card behind the img*/}
             <div className=" missionVission__card">
             </div>
              {/*Setting up the image*/}
             <span className="card-img img">
               <img src="/assets/img/banner/aboutUsimg.jpg" className="rounded-start" />
             </span>
             </div>
             <div className="container col-5 " >
            <h5 style={{color:"#efa357", marginLeft:"-2rem", marginTop:"5rem"}}>About us</h5>
            <h1 style={{marginLeft:"-2rem", marginBottom:"1.5rem"}}>
              We Are Dynamic Team And Business Agency
              </h1>
            <p style={{marginLeft:"-2rem", marginBottom:"1.5rem"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, 
              repudiandae doloremque vel nulla at laborum autem sit rem harum! 
              Nostrum esse ipsa saepe dolore tenetur, ullam corrupti excepturi 
              eaque doloremque vel nulla at laborum modi?
            </p>
              <button className="learnMore__btn">Learn More</button>
          </div>
       </div>

            {/*Service area*/}
        <div className="container faq__gap">
          Best Service
        </div>
        <div className="container" style={{paddingLeft:"3rem"}}>
          <h2 >These Are The Services We Provide</h2>
          <p>
          Through our partnership with our neighborhood specialist we rent your 
          house<br/> or apartment, Combined
          with our high level marketing approach, and negotiation skills.
          </p>
        </div>
        
        <div className="d-flex gap-3 " style={{paddingLeft:"3rem"}}>
            <div className="service__card">Marketing</div>
            <div className="service__card">Marketing</div>
            <div className="service__card">Marketing</div>
            <span className="card2__img img">
               <img src="/assets/img/banner/serviceimg.webp" className="rounded-start" />
             </span>
        </div>
     </div>
   </div>
  )
}

export default AboutUs
