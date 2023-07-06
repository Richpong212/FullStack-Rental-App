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
        paddingTop: "22rem"
      
         }}>Help Center
      </h1>  
    </div>
   <div className="container row faq__gap" style={{margin:"3rem 3rem"}}>
      <div className="col-7">
      <h2>
          Frequently 
          <p>Asked Questions</p> 
      </h2> 
      
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, 
          saepe blanditiis, perspiciatis sequi repellendus sint adipisci, est 
          iste quam maiores veniam ipsum dolorum quia tenetur. Impedit alias 
          vel rerum voluptatibus!
        </p>
        <div className="mb-3 mt-3">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, 
          saepe blanditiis, perspiciatis sequi repellendus sint adipisci, est 
          iste quam maiores veniam ipsum dolorum quia tenetur. Impedit alias 
          vel rerum voluptatibus!
        </p>
        </div>
        <div className="mb-3 mt-3 paragraph__card">
        <p>
          <h3 className="card-body" style={{color:"#ECA760",}}>Lorem ipsum dolor sit</h3>
           Amet consectetur adipisicing elit. Tempore, 
          saepe blanditiis, perspiciatis sequi repellendus sint adipisci, est 
          iste quam maiores veniam ipsum dolorum quia tenetur. Impedit alias 
          vel rerum voluptatibus!
        </p>
        </div>
      </div>

      <div className="col-5 card__faq faq__gap" >
      <img src="/assets/img/banner/sittingMan.webp" className="rounded-start"/>
      </div>
    </div>
 </div>
  )
}

export default Faq

