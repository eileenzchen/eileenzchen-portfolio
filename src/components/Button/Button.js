import React from 'react'
import './Button.css';


function Button(props) {

  return (      
    <a href={props.buttonLink} target={props.target}>
      <button className="monospace-500">
        {props.buttonText}
      </button>
    </a>
  )
}

export default Button