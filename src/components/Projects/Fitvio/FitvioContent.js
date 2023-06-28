import React from 'react'
import Polaroid from '../../Polaroid/Polaroid.js'
import * as Assets from './assets'

export function Intro() {
  const desc =  {
    role: "replace",
    team: "replace",
    skills: "replace, replace",
    tools: "replace, replace",
    duration: "replace months",
    cols: 2
  }

  return (
    <div id="Intro">
      <Polaroid 
        linkUrl="" 
        imageUrl={''} 
        alt="Fitvio"
        polaroidTitle="replace"
        polaroidDescription="replace"
        aspectRatio="aspectRatioWide"/>
    </div>
  )
}