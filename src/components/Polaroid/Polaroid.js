import React from 'react'
import { Grid } from '@mui/material';
import './Polaroid.css';

function Polaroid(props) {

  const photo = require(props.imageUrl).default;

  return (
    <>
    <div className="polaroid">
      {/* <div className="tape"></div> */}
      
      <a href={props.linkUrl}>

        <img src={photo} alt={props.alt} title={props.alt} className={props.aspectRatio}></img>
        <div className="polaroidText">
          <p className="monospace-500">{props.polaroidTitle}</p>
          <p className="monospace-300">{props.polaroidDescription}</p>
        </div>
        
      </a>
      
    </div>
  </>
    
  )
}

export default Polaroid 