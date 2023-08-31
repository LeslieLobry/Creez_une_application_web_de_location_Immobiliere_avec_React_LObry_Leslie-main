import React from "react";
import "../About/about.css"
import Accordeon from "../../components/Accordeon/accordeon";
import slogan from "../../data/slogan.json"
import Barriere from "../../components/Banniere/banniere";
import AB from "../../assets/AB.png"

const About= ()=>{
  return(
      <div className="About-contenant">
     <Barriere title="" image={AB}/>
      <div className="about-accordeon">
       <div className="about-mvt">
       {slogan.map((about, id) => {
          return (
            <div key={id}>
            <div className="contenant">
              <div className="text-accordion">
              <div key={about}>
               <Accordeon content={about.texte} title={about.title}/>
            </div>
            </div>
            </div>
            </div>
          )
        })
       }
      </div>
    </div>
    </div>
   
   )
}
    
export default About