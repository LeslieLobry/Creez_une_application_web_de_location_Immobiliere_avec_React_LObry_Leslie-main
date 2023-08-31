import React from "react"; 
import "../Banniere/banniere.css"
function Barriere({image, title1, title2}) {
    return (
        <div className="baniere-components">
           <div className="baniere-img">
             <img src={image} alt="Kasa"/>
           </div>
           <div className="baniere-text">
            <h1><span>{title1}</span><span>{title2}</span></h1>
           </div>
        </div>)
}

export default Barriere