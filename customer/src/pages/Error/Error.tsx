import React from "react";
import "./Error.scss"

const Error = () => {
  return (
<div>
  <div className="err__page">
    
     <h2 style={{color:"#343434"}}>Oops! Page not found.
     </h2>

     < h1 className="error__h1">404
     </h1>

     <p style={{color:"#343434"}}>We can't find the page you're looking for
     </p>

     <a href="/" className="container__a container__ahover"> Go back</a>
  </div>
</div>)
};

export default Error;
