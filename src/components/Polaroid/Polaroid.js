import React, { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import './Polaroid.css';
import ModalImage from "react-modal-image";

function Polaroid(props) {

  // const photo = require(props.imageUrl).default;
  const hrefAttribute = props.linkUrl ? {href: props.linkUrl} : {};

  useEffect(() => {
    Aos.init({duration: 1000, offset: -25});
  }, []);

  if (props.aspectRatio == 'aspectRatioRegular') {
    return (
      <div data-aos="fade-up" className="polaroid">
        <img src={props.imageUrl} alt={props.alt} title={props.alt} className={props.aspectRatio}></img>
        <div className="polaroidText">
          <p className="monospace-500 title">{props.polaroidTitle}</p>
          <p className="monospace-300 description">{props.polaroidDescription}</p>
        </div>
      </div>
    );
  }
  return (
    <div data-aos="fade-up" className="polaroid">
      
      <a {...hrefAttribute}>
        <img src={props.imageUrl} alt={props.alt} title={props.alt} className={props.aspectRatio}></img>
        <div className="polaroidText">
          <p className="monospace-500 title">{props.polaroidTitle}</p>
          <p className="monospace-300 description">{props.polaroidDescription}</p>
        </div>
        
      </a>
      
    </div>
  );
}

export default Polaroid 