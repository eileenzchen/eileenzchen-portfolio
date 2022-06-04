import React from 'react'
import './Button.css';
import {Link} from 'react-router-dom'


function Button(props) {

  return (  
    <Link to={props.buttonLink} target={props.target}>
      <button className="monospace-500">
        {props.buttonText}
      </button>
    </Link> 
  )
}

export default Button