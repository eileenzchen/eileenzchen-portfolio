import React, { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import './Polaroid.css';
import Tag from '../Tag/Tag.js'

function Polaroid(props) {

  // const photo = require(props.imageUrl).default;
  const hrefAttribute = props.linkUrl ? {href: props.linkUrl} : {};

  useEffect(() => {
    Aos.init({duration: 1000, offset: -5});
  }, []);

  if (props.aspectRatio === 'aspectRatioRegular') {
    return (
      <a {...hrefAttribute}>
        <div data-aos={props.animation || "fade-up"} data-aos-delay={props.fadeDelay} className="polaroid regular">
          <img src={props.imageUrl} alt={props.alt} title={props.alt} className={props.aspectRatio}></img>
          <div className="polaroidText">
            <p className="monospace-500 title">{props.polaroidTitle}</p>
            <p className="monospace-300 description">{props.polaroidDescription}</p>
          </div>
        </div>
      </a>
    );
  }
  return (
    <div data-aos={props.animation || "fade-up"} data-aos-delay={props.fadeDelay}>
      
      <a {...hrefAttribute} className={`polaroid wide`}>
        <img src={props.imageUrl} alt={props.alt} title={props.alt} className={props.aspectRatio}></img>
        <div className="polaroidText">
          <p className="monospace-500 title">{props.polaroidTitle}</p>
          <p className="monospace-300 description">{props.polaroidDescription}</p>
        </div>
        {props.tags && 
          <div className="tagsContainer">
            <Tag class="device" tagName={props.tags[0]}></Tag>
            <Tag class="role" tagName={props.tags[1]}></Tag>
          </div>
        }

      </a>
      
    </div>
  );
}

export default Polaroid 