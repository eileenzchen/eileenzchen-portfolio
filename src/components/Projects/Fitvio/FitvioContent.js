import React from 'react'
import Polaroid from '../../Polaroid/Polaroid.js'
import ProjectSummary from '../../ProjectSummary/ProjectSummary.js'

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
      <ProjectSummary desc={desc} style={{fontSize: 12}}/>
    </div>
  )
}