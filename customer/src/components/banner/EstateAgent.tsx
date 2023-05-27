import React from 'react'
import "./banner.scss"
import { red } from '@mui/material/colors';


const EstateAgent = () => {
    // Setting up background icon
  const publicUrl = process.env.PUBLIC_URL; 

  return (
    <div>
    <div style={{
          backgroundColor: "#ECA760",
         }}
          className="estate__container ">

          <div style={{ flex:"2", color:"#fff", }} className="">
               <h2>Become A Rental Estate Agent</h2>
          </div>
     <div style={{
            backgroundImage: "url("+ publicUrl +" /assets/img/icons/26.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            width: "100%",
            padding: "4rem 0rem",
            backgroundSize: "16rem",
            flex: "1",
            
          
          }}
             className="">
             
        </div>
        <div >
             <button className="estateagent__registerbtn ">
              Register Now
             </button>
        </div>
        </div>
        </div>
  )
}

export default EstateAgent

