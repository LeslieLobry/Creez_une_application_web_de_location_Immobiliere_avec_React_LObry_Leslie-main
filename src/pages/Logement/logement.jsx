import products from "../../data/logement.json"
import { useParams } from "react-router-dom"
import React from "react";
import "../Logement/logements.css"
import Carousel from "../../components/Carousel/carousel"
import Accordeon from "../../components/Accordeon/accordeon";
import Error from "../Error/error"
import Tags from "../../components/Tags/tags"
import starnul from "../../assets/starnul.png"
import starplein from "../../assets/starplein.png"

function Logement() {
    const { id } = useParams();
    const product = products.find((item) => item.id === id)
    if (product === undefined){
      return < Error/>
    }
    const {title,pictures, description, host,rating, location} = product;
    
     const listEquipments = product?.equipments.map((equipments, list)=>
     {
      return <li key={list}>{equipments}</li>
         })
    
    return (
    <section className="logement">
      {/* images */}
      <div className="carrousel">
        <Carousel slides={pictures}></Carousel>
      </div>
      <div className="logement-container">
          {/*info proprio*/}
          <div className="logement-info-container-1">
              <div className="logement-title">
                <h2>{title}</h2>
              </div>
              <div className="logement-location">
                <p>{location}</p>
              </div>
              <Tags/>
                </div>
    <div className="logement-info-container-2">
              <div className="logement-host">
                <div className="logement-name-img">
                  <div className="logement-name">
                    <p>{host.name}</p>
                    <p>{host.lastname}</p>
                  </div>
                  <div className="logement-img">
                    <img src={host.picture} alt="Kasa"></img>
                  </div>
                </div>
              </div>
              
            {/* note */}
            <div className="rating">
                {[...Array(5)].map((star, données) => {
                const value = données+ 1;
                return (
                <img key={données} src={value <=rating ? starplein : starnul} alt="star" />
                )
                })}
              </div> 
              </div>
              </div>
               {/* accordeon */}
          <div className="logement-accordeon">
                <div className="description">
                <Accordeon title="Description" content={description}>
                </Accordeon>
              </div>
              <div className="equipements">
                <Accordeon title="Equipements" content={listEquipments}>
                </Accordeon>
              </div>
          </div>
       </section>
    );
    }
    export default Logement;