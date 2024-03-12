import React from 'react'
import './PrimaryButton.css';
import {Link} from 'react-router-dom'


function PrimaryButton(props) {

  return (  
    <div className="buttonWrapper">
      <Link to={props.buttonLink} target={props.target} className="monospace-500 button-primary">
        {props.buttonText}
        {props.icon}
      </Link> 
    </div>
  )
}

export default PrimaryButton