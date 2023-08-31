import React, { useState } from "react";

import right from "../../assets/right.png";
import left from "../../assets/left.png"

import "../Carousel/carousel.css"

  function Carrousel({ slides }) {
	const [current, setCurrent] = useState(0);
	const length = slides.length
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); 
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); 
	}
	
	return (
		<section className="carrousel-container">
			<div className="carrousel-left">
        {length > 1 && (
				<img src={left}alt="gauche"onClick={prevSlide}/>
			)}
      </div>
	   <div className="carrousel-right">
        {length > 1 && (
				<img src={right} alt="droite"	onClick={nextSlide}/>
			)}
      </div>
	  
			<div className="carrousel-img">
      {slides.map((slide, index) => (
				<div key={index} className={current === index ? "slider active-": "slider noactive"}>
					{index === current && <img src={slide} alt="Kasa" />}
					{index >  1 && (
						<span className="number">
							{current + 1}/{length}
						</span>
					)}
				</div>
			))}
      </div>
     
	  </section>
	);
}
export default Carrousel