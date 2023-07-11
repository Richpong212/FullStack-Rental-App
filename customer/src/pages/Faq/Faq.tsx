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
        paddingLeft: "4rem"
      
         }}>Help Center
      </h1>  
    </div>
   <div className=" row faq__gap" >
      <div className="col-7 faq__gap" style={{margin:"1rem 1rem",}}>
      <h2>
          Frequently 
          <p>Asked Questions</p> 
      </h2> 
      
        <p style={{paddingBottom:"1.5rem"}}> 
          Lorem ipsum dolor, veniam ipsum sit amet consectetur adipisicing elit. <br/>
          sit amet saepe blanditiis, perspiciatis sequi repellendus  sit ametsint <br/>
          saepe blanditiis, perspiciatis sequi Impedit  maiores veniam ipsum iste <br/>
          iste quam maiores veniam ipsum dolorum blanditiis, perspiciatis quia ten. 
        </p>
        
        <div className="mt-3 paragraph__card">
        <p className="" style={{margin:"1rem", paddingBottom:"1rem"}}>
          <h3 className="" style={{color:"#ECA760", paddingTop:"1rem"}}>Lorem ipsum dolor sit</h3>
          Amet consectetur adipisicing elit. Tempore,maiores veniam<br/> 
          saepe blanditiis, perspiciatis sequi Impedit iquia stenetur. <br/>
          repellendus sint adipisci, est iste quam ipsum dolorum sit. <br/>
            
        </p>
        <p className=" paragraph__cardTwo" style={{ paddingBottom:"2rem"}}>
          <h5 className="" style={{color:"#ECA760", margin:"1rem", paddingTop:"2rem"}}>Amet consectetur adipisicing elit Tempore</h5>
    
        </p>
        <p className=" paragraph__cardTwo" style={{ paddingBottom:"2rem"}}>
          <h5 className="" style={{color:"#ECA760", margin:"1rem", paddingTop:"2rem"}}>Maiores veniam ipsum dolorum quia tenetur</h5>
    
        </p>
        <p className=" paragraph__cardTwo" style={{ paddingBottom:"5rem"}}>
          <h5 className="" style={{color:"#ECA760", margin:"1rem", paddingTop:"2rem"}}>Lorem consectetur Sæper ipsum elit Tempore</h5>
    
        </p>
        </div>
      </div>

      <div className="col-5 card__faq paragraph__img" >
      <img src="/assets/img/banner/FaqMan.jpg" className="rounded-start" />
      </div>
    </div>
 </div>
  )
}

export default Faq

