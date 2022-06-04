import React from 'react'

function ProjectSummary(props) {
  return (
    <div className="projectSummary">
      <table>
        <tbody>
          <tr>
            <td className="monospace-500">role</td>
            <td className="monospace-400">{props.desc.role}</td>
          </tr>
          <tr>
            <td className="monospace-500">team</td>
            <td className="monospace-400">{props.desc.team}</td>
          </tr>
          <tr>
            <td className="monospace-500">skills</td>
            <td className="monospace-400">{props.desc.skills}</td>
          </tr>
          <tr>
            <td className="monospace-500">tools</td>
            <td className="monospace-400">{props.desc.tools}</td>
          </tr>
          <tr>
            <td className="monospace-500">duration</td>
            <td className="monospace-400">{props.desc.duration}</td>
          </tr>               
        </tbody>
      </table>
    </div>
   
  )
}

export default ProjectSummary