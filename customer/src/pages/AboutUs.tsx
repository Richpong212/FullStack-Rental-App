import React from 'react'

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
    </div>
  )
}

export default AboutUs
