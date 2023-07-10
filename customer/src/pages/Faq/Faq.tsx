import React from 'react'
import "./Faq.scss"

const Faq = () => {
    {/* Background image for the FAQ page */}
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
        paddingLeft: "2rem"
      
         }}>Help Center
      </h1>  
    </div>
   <div className=" row faq__gap" >
      <div className="col-7 faq__gap" style={{margin:"0rem", marginLeft: "1rem"}}>
      <h2>
          Frequently 
          <p>Asked Questions</p> 
      </h2> 
      
        <p> 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.  
          saepe blanditiis, perspiciatis sequi repellendus sint 
          iste quam maiores veniam ipsum dolorum quia tenetur. 
          Impedit alias vel rerum voluptatibus! adipisci, est 
        </p>
        
        <div className="mb-3 mt-3 paragraph__card">
        <p className="" style={{margin:"1rem", paddingBottom:"3rem"}}>
          <h3 className="" style={{color:"#ECA760", paddingTop:"1rem"}}>Lorem ipsum dolor sit</h3>
           Amet consectetur adipisicing elit. Tempore, 
          saepe blanditiis, perspiciatis sequi Impedit 
          repellendus sint adipisci, est iste quam 
          maiores veniam ipsum dolorum quia tenetur.  
        </p>
        <p className=" paragraph__cardTwo" style={{ paddingBottom:"3rem"}}>
          <h5 className="" style={{color:"#ECA760", margin:"1rem", paddingTop:"2rem"}}>Amet consectetur adipisicing elit Tempore</h5>
    
        </p>
        <p className=" paragraph__cardTwo" style={{ paddingBottom:"3rem"}}>
          <h5 className="" style={{color:"#ECA760", margin:"1rem", paddingTop:"2rem"}}>Amet consectetur adipisicing elit Tempore</h5>
    
        </p>
        <p className=" paragraph__cardTwo" style={{ paddingBottom:"3rem"}}>
          <h5 className="" style={{color:"#ECA760", margin:"1rem", paddingTop:"2rem"}}>Amet consectetur adipisicing elit Tempore</h5>
    
        </p>
        </div>
      </div>

      <div className="col-5 card__faq paragraph__img" >
      <img src="/assets/img/banner/FaqMan.jpg" className="rounded-start" style={{margin:"0rem", marginLeft: "0rem"}}/>
      </div>
    </div>
 </div>
  )
}

export default Faq

