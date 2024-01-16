import React from 'react'
import './Tag.css';


function Tag(props) {

  return (  
    <div className={`tagContainer ${props.class}`}>
      <span className="tagName">{props.tagName}</span>
    </div>
  )
}

export default Tag